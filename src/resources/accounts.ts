// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Begins the secure process of linking a new external financial institution (e.g.,
   * another bank, investment platform) to the user's profile, typically involving a
   * third-party tokenized flow.
   *
   * @example
   * ```ts
   * const response = await client.accounts.link({
   *   countryCode: 'US',
   *   institutionName: 'Bank of America',
   * });
   * ```
   */
  link(body: AccountLinkParams, options?: RequestOptions): APIPromise<AccountLinkResponse> {
    return this._client.post('/accounts/link', { body, ...options });
  }

  /**
   * Retrieves comprehensive analytics for a specific financial account, including
   * historical balance trends, projected cash flow, and AI-driven insights into
   * spending patterns.
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveDetails(
   *   'acc_chase_checking_4567',
   * );
   * ```
   */
  retrieveDetails(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveDetailsResponse> {
    return this._client.get(path`/accounts/${accountID}/details`, options);
  }
}

export interface AccountLinkResponse {
  authUri: string;

  linkSessionId: string;

  status: string;

  message?: string;
}

export interface AccountRetrieveDetailsResponse {
  id: string;

  currency: string;

  currentBalance: number;

  institutionName: string;

  lastUpdated: string;

  name: string;

  type: string;

  accountHolder?: string;

  availableBalance?: number;

  balanceHistory?: Array<AccountRetrieveDetailsResponse.BalanceHistory>;

  externalId?: string;

  interestRate?: number;

  mask?: string;

  openedDate?: string;

  projectedCashFlow?: AccountRetrieveDetailsResponse.ProjectedCashFlow;

  subtype?: string;

  transactionsCount?: number;
}

export namespace AccountRetrieveDetailsResponse {
  export interface BalanceHistory {
    balance?: number;

    date?: string;
  }

  export interface ProjectedCashFlow {
    confidenceScore?: number;

    days30?: number;

    days90?: number;
  }
}

export interface AccountLinkParams {
  countryCode: string;

  institutionName: string;
}

export declare namespace Accounts {
  export {
    type AccountLinkResponse as AccountLinkResponse,
    type AccountRetrieveDetailsResponse as AccountRetrieveDetailsResponse,
    type AccountLinkParams as AccountLinkParams,
  };
}
