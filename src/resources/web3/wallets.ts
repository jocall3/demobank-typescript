// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Wallets extends APIResource {
  /**
   * Lists all connected cryptocurrency wallets.
   */
  list(
    query: WalletListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WalletListResponse> {
    return this._client.get('/web3/wallets', { query, ...options });
  }

  /**
   * Connects a new crypto wallet using a signed message for verification.
   */
  connect(body: WalletConnectParams, options?: RequestOptions): APIPromise<CryptoWalletConnection> {
    return this._client.post('/web3/wallets', { body, ...options });
  }
}

/**
 * Connected crypto wallet.
 */
export interface CryptoWalletConnection {
  id: string;

  blockchainNetwork: string;

  lastSynced: string;

  readAccessGranted: boolean;

  status: 'connected' | 'disconnected' | 'pending_verification' | 'error';

  walletAddress: string;

  walletProvider: string;

  writeAccessGranted: boolean;
}

export interface WalletListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<CryptoWalletConnection>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export interface WalletListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export interface WalletConnectParams {
  blockchainNetwork: string;

  signedMessage: string;

  walletAddress: string;

  walletProvider: string;

  requestWriteAccess?: boolean;
}

export declare namespace Wallets {
  export {
    type CryptoWalletConnection as CryptoWalletConnection,
    type WalletListResponse as WalletListResponse,
    type WalletListParams as WalletListParams,
    type WalletConnectParams as WalletConnectParams,
  };
}
