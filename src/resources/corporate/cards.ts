// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Cards extends APIResource {
  /**
   * Retrieves a list of all corporate cards issued to the organization.
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardListResponse> {
    return this._client.get('/corporate/cards', { query, ...options });
  }

  /**
   * Instantly issues a new virtual corporate card for immediate use.
   */
  issueVirtual(body: CardIssueVirtualParams, options?: RequestOptions): APIPromise<CorporateCard> {
    return this._client.post('/corporate/cards/virtual', { body, ...options });
  }
}

/**
 * Represents a corporate card.
 */
export interface CorporateCard {
  id: string;

  cardNumberMask: string;

  cardType: 'physical' | 'virtual';

  /**
   * Controls for corporate cards.
   */
  controls: CorporateCardControls;

  createdDate: string;

  currency: string;

  expirationDate: string;

  frozen: boolean;

  holderName: string;

  status: 'active' | 'suspended' | 'deactivated' | 'pending_activation';

  associatedEmployeeId?: string | null;

  spendingPolicyId?: string | null;
}

/**
 * Controls for corporate cards.
 */
export interface CorporateCardControls {
  atmWithdrawals?: boolean;

  contactlessPayments?: boolean;

  dailyLimit?: number | null;

  internationalTransactions?: boolean;

  merchantCategoryRestrictions?: Array<string> | null;

  monthlyLimit?: number | null;

  onlineTransactions?: boolean;

  singleTransactionLimit?: number | null;

  vendorRestrictions?: Array<string> | null;
}

export interface CardListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<CorporateCard>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export interface CardListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export interface CardIssueVirtualParams {
  /**
   * Controls for corporate cards.
   */
  controls: CorporateCardControls;

  expirationDate: string;

  holderName: string;

  purpose: string;

  associatedEmployeeId?: string | null;

  spendingPolicyId?: string | null;
}

export declare namespace Cards {
  export {
    type CorporateCard as CorporateCard,
    type CorporateCardControls as CorporateCardControls,
    type CardListResponse as CardListResponse,
    type CardListParams as CardListParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
  };
}
