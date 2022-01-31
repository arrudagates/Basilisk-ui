import { Resolvers } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import {
  GetSelectedAccountQueryResponse,
  useGetSelectedAccountQuery,
} from '../../queries/useGetSelectedAccountQuery';
import TestRenderer, { act } from 'react-test-renderer';
import { useSelectedAccountQueryResolver } from './selectedAccount';

const mockUsePersistActiveAccount = jest.fn();
jest.mock('../../usePersistActiveAccount', () => ({
  usePersistActiveAccount: () => mockUsePersistActiveAccount(),
}));

// test component that returns the query result(s)
const Test = () => {
  const { data } = useGetSelectedAccountQuery();
  return <>{JSON.stringify(data)}</>;
};

const useResolvers = () => {
  return {
    Query: {
      ...useSelectedAccountQueryResolver(),
      accounts: () => {
        return [{ id: 'mockId', name: 'Mocked Account', balances: [] }];
      },
    },
  };
};

// testing helper to wrap a testing component into a provider with configured resolvers
export const resolverProviderFactory =
  (useResolvers: () => Resolvers) =>
  ({ children }: { children: React.ReactNode }) => {
    return (
      <MockedProvider resolvers={useResolvers()}>{children}</MockedProvider>
    );
  };

// testing helper to wait for the query to resolve / return data
export const waitForQuery = async () =>
  await new Promise((resolve) => setTimeout(resolve, 10));

describe('selectedAccount', () => {
  // rendered 'Test' component wrapped in a 'MockedProvider'
  let component: TestRenderer.ReactTestRenderer;
  // function to parse / cast the rendering result of 'Test' into the required testing data
  let data: () => GetSelectedAccountQueryResponse | undefined = () =>
    JSON.parse(component.toJSON() as unknown as string);

  // combine resolvers and the 'Test' component and render them
  const render = () => {
    const ResolverProvider = resolverProviderFactory(useResolvers);
    component = TestRenderer.create(
      <ResolverProvider>
        <Test />
      </ResolverProvider>
    );
  };

  afterEach(() => {
    jest.resetModules();
  });

  describe('falsy case', () => {
    beforeEach(() => {
      mockUsePersistActiveAccount.mockImplementation(() => [null]);
    });

    it('should resolve the selectedAccount as null for the', async () => {
      render();
      await act(async () => {
        await waitForQuery();
        expect(data()?.selectedAccount).toBe(null);
      });
    });
  });

  describe('truthy case', () => {
    beforeEach(() => {
      mockUsePersistActiveAccount.mockImplementation(() => [{ id: 'mockId' }]);
    });

    it('should resolve the selectedAccount as null for the', async () => {
      render();
      await act(async () => {
        await waitForQuery();
        expect(data()?.selectedAccount).toStrictEqual({
          id: 'mockId',
          name: 'Mocked Account',
          balances: [],
          __typename: 'Account',
        });
      });
    });
  });
});
