// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WalletsAPI from './wallets';
import {
  WalletConnectParams,
  WalletConnectResponse,
  WalletListParams,
  WalletListResponse,
  Wallets,
} from './wallets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);

  /**
   * Fetches a comprehensive list of Non-Fungible Tokens (NFTs) owned by the user
   * across all connected wallets and supported blockchain networks, including
   * metadata and market values.
   *
   * @example
   * ```ts
   * const response = await client.web3.listNFTs();
   * ```
   */
  listNFTs(query: Web3ListNFTsParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/web3/nfts', { query, ...options });
  }
}

export type Web3ListNFTsResponse = unknown;

export interface Web3ListNFTsParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

Web3.Wallets = Wallets;

export declare namespace Web3 {
  export { type Web3ListNFTsResponse as Web3ListNFTsResponse, type Web3ListNFTsParams as Web3ListNFTsParams };

  export {
    Wallets as Wallets,
    type WalletListResponse as WalletListResponse,
    type WalletConnectResponse as WalletConnectResponse,
    type WalletListParams as WalletListParams,
    type WalletConnectParams as WalletConnectParams,
  };
}
