import { useCallback } from 'react';
import { Account } from '../../../../generated/graphql';
import { AccountSelector } from './../AccountSelector';
import {
  ModalPortalElementFactory,
  ModalPortalElementFactoryArgs,
} from './../../../Balance/AssetBalanceInput/hooks/useModalPortal';
import { WalletProps } from '../../Wallet';

export type ModalPortalElement = ({
  accounts,
  onAccountSelected,
  account,
  setActiveAccount,
  isExtensionAvailable,
}: Pick<
  WalletProps,
  | 'accounts'
  | 'onAccountSelected'
  | 'account'
  | 'setActiveAccount'
  | 'isExtensionAvailable'
>) => ModalPortalElementFactory;
export type CloseModal = ModalPortalElementFactoryArgs['closeModal'];

export const useModalPortalElement: ModalPortalElement = ({
  accounts,
  onAccountSelected,
  account,
  setActiveAccount,
  isExtensionAvailable,
}) => {
  const handleAccountSelected = useCallback(
    (closeModal: CloseModal) => (account: Account) => {
      closeModal();
      onAccountSelected(account);
    },
    [onAccountSelected]
  );

  return useCallback(
    ({ closeModal, elementRef, isModalOpen }) => {
      return isModalOpen ? (
        <AccountSelector
          innerRef={elementRef}
          accounts={accounts}
          account={account}
          onAccountSelected={handleAccountSelected(closeModal)}
          closeModal={closeModal}
          setActiveAccount={setActiveAccount}
          isExtensionAvailable={isExtensionAvailable}
        />
      ) : (
        <></>
      );
    },
    [
      accounts,
      account,
      handleAccountSelected,
      setActiveAccount,
      isExtensionAvailable,
    ]
  );
};