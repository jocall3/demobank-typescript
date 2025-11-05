// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WalletsAPI from './wallets';
import { CryptoWalletConnection, WalletConnectParams, WalletListResponse, Wallets } from './wallets';
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
  listNFTs(options?: RequestOptions): APIPromise<Web3ListNFTsResponse> {
    return this._client.get('/web3/nfts', options);
  }
}

export type Web3ListNFTsResponse = Array<Web3ListNFTsResponse.Web3ListNFTsResponseItem>;

export namespace Web3ListNFTsResponse {
  /**
   * Detailed information about a Non-Fungible Token (NFT).
   */
  export interface Web3ListNFTsResponseItem {
    /**
     * Unique identifier for the NFT (often contract address + token ID).
     */
    id?: string;

    /**
     * Key attributes or traits of the NFT.
     */
    attributes?: Array<Web3ListNFTsResponseItem.Attribute>;

    /**
     * The blockchain network where the NFT resides.
     */
    blockchainNetwork?: 'Ethereum' | 'Polygon' | 'Solana' | 'Other';

    /**
     * Name of the NFT collection.
     */
    collectionName?: string;

    /**
     * The smart contract address of the NFT collection.
     */
    contractAddress?: string;

    /**
     * Description of the NFT.
     */
    description?: string | null;

    /**
     * AI-estimated current market value in USD.
     */
    estimatedValueUSD?: number | null;

    /**
     * URL to the NFT's primary image.
     */
    imageUrl?: string;

    /**
     * Last recorded sale price in USD, if available.
     */
    lastSalePriceUSD?: number | null;

    /**
     * Individual name of the NFT.
     */
    name?: string;

    /**
     * The blockchain address currently owning the NFT.
     */
    ownerAddress?: string;

    /**
     * The unique token ID within the contract.
     */
    tokenId?: string;
  }

  export namespace Web3ListNFTsResponseItem {
    export interface Attribute {
      trait_type?: string;

      value?: string;
    }
  }
}

Web3.Wallets = Wallets;

export declare namespace Web3 {
  export { type Web3ListNFTsResponse as Web3ListNFTsResponse };

  export {
    Wallets as Wallets,
    type CryptoWalletConnection as CryptoWalletConnection,
    type WalletListResponse as WalletListResponse,
    type WalletConnectParams as WalletConnectParams,
  };
}
