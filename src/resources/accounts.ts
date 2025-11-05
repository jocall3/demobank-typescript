// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Fetches a comprehensive, real-time list of all external financial accounts
   * linked to the user's Demo Bank profile, including consolidated balances and
   * institutional details.
   *
   * @example
   * ```ts
   * const linkedAccounts = await client.accounts.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AccountListResponse> {
    return this._client.get('/accounts', options);
  }

  /**
   * Begins the secure process of linking a new external financial institution (e.g.,
   * another bank, investment platform) to the user's Demo Bank profile, typically
   * involving a third-party tokenized flow.
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

/**
 * A summary of a financial account linked from an external institution.
 */
export interface LinkedAccount {
  /**
   * A unique, internal ID for the linked account.
   */
  id?: string;

  /**
   * The current available balance, accounting for pending transactions.
   */
  availableBalance?: number | null;

  /**
   * The currency of the account.
   */
  currency?: string;

  /**
   * The current available balance in the account.
   */
  currentBalance?: number;

  /**
   * The institution's ID for the account from the data provider (e.g., Plaid).
   */
  externalId?: string;

  /**
   * Name of the financial institution.
   */
  institutionName?: string;

  /**
   * Timestamp of the last successful balance update.
   */
  lastUpdated?: string;

  /**
   * Credit limit for credit accounts, or overdraft limit for checking accounts.
   */
  limit?: number | null;

  /**
   * Last four digits of the account number, for display purposes.
   */
  mask?: string;

  /**
   * User-friendly name of the account.
   */
  name?: string;

  /**
   * Specific subtype of the account.
   */
  subtype?: string;

  /**
   * Primary type of the account.
   */
  type?: 'depository' | 'credit' | 'loan' | 'investment' | 'brokerage' | 'crypto';
}

export type AccountListResponse = Array<LinkedAccount>;

/**
 * Response containing instructions to complete the account linking.
 */
export interface AccountLinkResponse {
  /**
   * The URI the user should be redirected to, or presented in a webview, to complete
   * the linking process at the external institution's portal.
   */
  authUri: string;

  /**
   * A session ID to track the linking process.
   */
  linkSessionId: string;

  /**
   * Current status of the linking request.
   */
  status: 'pending_user_action' | 'complete' | 'failed';

  message?: string | null;
}

/**
 * Detailed information and analytics for a specific financial account.
 */
export interface AccountRetrieveDetailsResponse extends LinkedAccount {
  /**
   * Name of the primary account holder.
   */
  accountHolder?: string;

  /**
   * The unique identifier for the account.
   */
  accountId?: string;

  /**
   * Historical daily balance snapshots.
   */
  balanceHistory?: Array<AccountRetrieveDetailsResponse.BalanceHistory>;

  /**
   * Annual interest rate for savings or lending accounts.
   */
  interestRate?: number | null;

  /**
   * Date the account was opened.
   */
  openedDate?: string;

  /**
   * AI-driven projection of future cash flow for the account.
   */
  projectedCashFlow?: AccountRetrieveDetailsResponse.ProjectedCashFlow;

  /**
   * Total number of transactions linked to this account.
   */
  transactionsCount?: number;
}

export namespace AccountRetrieveDetailsResponse {
  export interface BalanceHistory {
    balance?: number;

    date?: string;
  }

  /**
   * AI-driven projection of future cash flow for the account.
   */
  export interface ProjectedCashFlow {
    /**
     * AI confidence score for the cash flow projection.
     */
    confidenceScore?: number;

    /**
     * Projected cash flow for the next 30 days.
     */
    days30?: number;

    /**
     * Projected cash flow for the next 90 days.
     */
    days90?: number;
  }
}

export interface AccountLinkParams {
  /**
   * ISO 3166-1 alpha-2 country code of the institution.
   */
  countryCode: string;

  /**
   * The name of the financial institution to link.
   */
  institutionName: string;

  /**
   * Optional: OAuth token from the institution if direct connection is supported.
   */
  accessToken?: string | null;
}

export declare namespace Accounts {
  export {
    type LinkedAccount as LinkedAccount,
    type AccountListResponse as AccountListResponse,
    type AccountLinkResponse as AccountLinkResponse,
    type AccountRetrieveDetailsResponse as AccountRetrieveDetailsResponse,
    type AccountLinkParams as AccountLinkParams,
  };
}
