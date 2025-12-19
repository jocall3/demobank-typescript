// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Initiates the process to link an external financial institution via Open Banking
   * protocols.
   */
  link(body: AccountLinkParams, options?: RequestOptions): APIPromise<AccountLinkResponse> {
    return this._client.post('/accounts/link', { body, ...options });
  }
}

/**
 * Represents a linked financial account.
 */
export interface LinkedAccount {
  id: string;

  currency: string;

  currentBalance: number;

  institutionName: string;

  lastUpdated: string;

  name: string;

  type: 'depository' | 'credit' | 'loan' | 'investment' | 'other';

  availableBalance?: number | null;

  externalId?: string | null;

  mask?: string | null;

  subtype?: string | null;
}

/**
 * Response for account linking.
 */
export interface AccountLinkResponse {
  authUri: string;

  linkSessionId: string;

  status: 'pending_user_action' | 'completed' | 'failed';

  message?: string | null;
}

export interface AccountLinkParams {
  countryCode: string;

  institutionName: string;

  providerIdentifier?: string | null;

  redirectUri?: string | null;
}

export declare namespace Accounts {
  export {
    type LinkedAccount as LinkedAccount,
    type AccountLinkResponse as AccountLinkResponse,
    type AccountLinkParams as AccountLinkParams,
  };
}
