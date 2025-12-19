// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WalletsAPI from './wallets';
import {
  CryptoWalletConnection,
  WalletConnectParams,
  WalletListParams,
  WalletListResponse,
  Wallets,
} from './wallets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Web3 extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);

  /**
   * Retrieves a list of NFTs owned by the user across connected wallets.
   */
  listNFTs(
    query: Web3ListNFTsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Web3ListNFTsResponse> {
    return this._client.get('/web3/nfts', { query, ...options });
  }
}

export interface Web3ListNFTsResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<Web3ListNFTsResponse.Data>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export namespace Web3ListNFTsResponse {
  /**
   * NFT asset details.
   */
  export interface Data {
    id: string;

    blockchainNetwork: string;

    collectionName: string;

    contractAddress: string;

    imageUrl: string;

    name: string;

    ownerAddress: string;

    tokenId: string;

    attributes?: Array<Data.Attribute> | null;

    description?: string | null;

    estimatedValueUSD?: number | null;

    lastSalePriceUSD?: number | null;
  }

  export namespace Data {
    export interface Attribute {
      trait_type?: string;

      value?: string;
    }
  }
}

export interface Web3ListNFTsParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

Web3.Wallets = Wallets;

export declare namespace Web3 {
  export { type Web3ListNFTsResponse as Web3ListNFTsResponse, type Web3ListNFTsParams as Web3ListNFTsParams };

  export {
    Wallets as Wallets,
    type CryptoWalletConnection as CryptoWalletConnection,
    type WalletListResponse as WalletListResponse,
    type WalletListParams as WalletListParams,
    type WalletConnectParams as WalletConnectParams,
  };
}
