import { ApolloCache, NormalizedCacheObject } from '@apollo/client'
import { web3FromAddress } from '@polkadot/extension-dapp'
import { useCallback } from 'react'
import {
  GetActiveAccountQueryResponse,
  GET_ACTIVE_ACCOUNT
} from '../accounts/queries/useGetActiveAccountQuery'
import { withErrorHandler } from '../apollo/withErrorHandler'
import { usePolkadotJsContext } from '../polkadotJs/usePolkadotJs'
import { xykBuyHandler } from '../pools/xyk/buy'
import {
  reject,
  resolve,
  vestingClaimHandler
} from '../vesting/useVestingMutationResolvers'
import { usePersistentConfig } from './usePersistentConfig'
import { SetConfigMutationVariables } from './useSetConfigMutation'

export const defaultAssetId = '0'

export const setCurrencyHandler = (resolve: resolve, reject: reject) => {
  return vestingClaimHandler(resolve, reject)
}

export const useConfigMutationResolvers = () => {
  const { apiInstance, loading } = usePolkadotJsContext()
  const { setPersistedConfig } = usePersistentConfig()

  const setConfig = withErrorHandler(
    useCallback(
      async (
        _obj,
        args: SetConfigMutationVariables,
        { cache }: { cache: ApolloCache<NormalizedCacheObject> }
      ) => {
        // TODO: error handling?
        if (!apiInstance || loading) return

        // TODO: return an optimistic update to the cache with the new config
        // await withGracefulErrors(
        await new Promise(async (resolve, reject) => {
          const address = cache.readQuery<GetActiveAccountQueryResponse>({
            query: GET_ACTIVE_ACCOUNT
          })?.activeAccount?.id

          try {
            if (!address) return reject()

            const { signer } = await web3FromAddress(address)

            await apiInstance.tx.multiTransactionPayment
              .setCurrency(args.config?.feePaymentAsset || defaultAssetId)
              .signAndSend(
                address,
                { signer },
                xykBuyHandler(resolve, reject, apiInstance)
              )
          } catch (e) {
            reject(e)
          }
        })
        // [gracefulExtensionCancelationErrorHandler]
        // []
        // );

        const persistableConfig = args.config
        // there's no point in persisting the feePaymentAsset since it will
        // be refetched from the node anyways
        delete persistableConfig?.feePaymentAsset

        // setPersistedConfig(persistableConfig || defaultConfigValue);
      },
      [apiInstance, loading, setPersistedConfig]
    )
  )

  return {
    setConfig
  }
}
