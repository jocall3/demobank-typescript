// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Wallets extends APIResource {
  /**
   * Retrieves a list of all securely linked cryptocurrency wallets (e.g., MetaMask,
   * Ledger integration), showing their addresses, associated networks, and
   * verification status.
   *
   * @example
   * ```ts
   * const wallets = await client.web3.wallets.list();
   * ```
   */
  list(query: WalletListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/web3/wallets', { query, ...options });
  }

  /**
   * Initiates the process to securely connect a new cryptocurrency wallet to the
   * user's profile, typically involving a signed message or OAuth flow from the
   * wallet provider.
   *
   * @example
   * ```ts
   * const response = await client.web3.wallets.connect();
   * ```
   */
  connect(body: WalletConnectParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/web3/wallets', { body, ...options });
  }
}

export type WalletListResponse = unknown;

export type WalletConnectResponse = unknown;

export interface WalletListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export interface WalletConnectParams {}

export declare namespace Wallets {
  export {
    type WalletListResponse as WalletListResponse,
    type WalletConnectResponse as WalletConnectResponse,
    type WalletListParams as WalletListParams,
    type WalletConnectParams as WalletConnectParams,
  };
}
