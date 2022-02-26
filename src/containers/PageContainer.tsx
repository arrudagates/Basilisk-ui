import React from 'react';
import { useLastBlockQuery } from '../hooks/lastBlock/useLastBlockQuery';
import { Wallet } from './Wallet';
import './PageContainer.scss';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const { data: lastBlockData } = useLastBlockQuery();

  return (
    <div className="page-container">
      <div className="page-header">
        <div>Basilisk</div>
        <Wallet />
      </div>
      <div className="">{children}</div>

      <div className="footer">
        <span>
          {lastBlockData?.lastBlock?.parachainBlockNumber ? (
            `#${lastBlockData.lastBlock.parachainBlockNumber}/#${lastBlockData.lastBlock.relaychainBlockNumber}`
          ) : (
            <></>
          )}
        </span>
      </div>
    </div>
  );
};
