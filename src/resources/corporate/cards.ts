// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Cards extends APIResource {
  /**
   * Retrieves a comprehensive list of all physical and virtual corporate cards
   * associated with the user's organization, including their status, assigned
   * holder, and current spending controls.
   *
   * @example
   * ```ts
   * const corporateCards = await client.corporate.cards.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CardListResponse> {
    return this._client.get('/corporate/cards', options);
  }

  /**
   * Immediately changes the frozen status of a corporate card, preventing or
   * allowing transactions in real-time, critical for security and expense
   * management.
   *
   * @example
   * ```ts
   * const corporateCard = await client.corporate.cards.freeze(
   *   'corp_card_xyz987654',
   *   { freeze: true },
   * );
   * ```
   */
  freeze(cardID: string, body: CardFreezeParams, options?: RequestOptions): APIPromise<CorporateCard> {
    return this._client.post(path`/corporate/cards/${cardID}/freeze`, { body, ...options });
  }

  /**
   * Creates and issues a new virtual corporate card with specified spending limits,
   * merchant restrictions, and expiration dates, ideal for secure online purchases
   * and temporary projects.
   *
   * @example
   * ```ts
   * const corporateCard =
   *   await client.corporate.cards.issueVirtual({
   *     controls: {},
   *     holderName: 'Marketing Campaign Q3',
   *     purpose: 'Online advertising for Q3 product launch.',
   *   });
   * ```
   */
  issueVirtual(body: CardIssueVirtualParams, options?: RequestOptions): APIPromise<CorporateCard> {
    return this._client.post('/corporate/cards/virtual', { body, ...options });
  }

  /**
   * Updates the sophisticated spending controls, limits, and policy overrides for a
   * specific corporate card, enabling real-time adjustments for security and budget
   * adherence.
   *
   * @example
   * ```ts
   * const corporateCard =
   *   await client.corporate.cards.updateControls(
   *     'corp_card_xyz987654',
   *   );
   * ```
   */
  updateControls(
    cardID: string,
    body: CardUpdateControlsParams,
    options?: RequestOptions,
  ): APIPromise<CorporateCard> {
    return this._client.put(path`/corporate/cards/${cardID}/controls`, { body, ...options });
  }
}

/**
 * Detailed information for a corporate enterprise card, including its holder,
 * status, and spending controls.
 */
export interface CorporateCard {
  /**
   * Unique identifier for the corporate card.
   */
  id?: string;

  /**
   * Internal employee ID linked to this card.
   */
  associatedEmployeeId?: string;

  /**
   * Masked card number for security (first six and last four digits).
   */
  cardNumberMask?: string;

  /**
   * Type of card: physical or virtual.
   */
  cardType?: 'physical' | 'virtual';

  /**
   * Configured spending limits and transaction controls for the card.
   */
  controls?: CorporateCardControls;

  /**
   * Date and time the card was issued.
   */
  createdDate?: string;

  /**
   * Expiration date of the card.
   */
  expirationDate?: string;

  /**
   * Indicates if the card is temporarily frozen, preventing transactions.
   */
  frozen?: boolean;

  /**
   * Name of the employee or individual holding the card.
   */
  holderName?: string;

  /**
   * ID of the corporate spending policy applied to this card.
   */
  spendingPolicyId?: string | null;

  /**
   * Current operational status of the card.
   */
  status?: 'Active' | 'Suspended' | 'Lost' | 'Stolen' | 'Cancelled' | 'Expired';
}

/**
 * Granular spending controls and limits for a corporate card.
 */
export interface CorporateCardControls {
  /**
   * Allow or disallow ATM cash withdrawals.
   */
  atmWithdrawals?: boolean;

  /**
   * Allow or disallow contactless (NFC) payments.
   */
  contactlessPayments?: boolean;

  /**
   * The daily spending limit in USD.
   */
  dailyLimit?: number;

  /**
   * Allow or disallow international transactions.
   */
  internationalTransactions?: boolean;

  /**
   * List of allowed merchant categories (MCCs). If empty, all are allowed subject to
   * other controls.
   */
  merchantCategoryRestrictions?: Array<string>;

  /**
   * The total spending limit in USD for the current calendar month.
   */
  monthlyLimit?: number;

  /**
   * Allow or disallow online transactions.
   */
  onlineTransactions?: boolean;

  /**
   * The maximum amount for a single transaction in USD.
   */
  singleTransactionLimit?: number;

  /**
   * Specific vendors or merchants that are explicitly allowed or blocked.
   */
  vendorRestrictions?: Array<string>;
}

export type CardListResponse = Array<CorporateCard>;

export interface CardFreezeParams {
  /**
   * Set to `true` to freeze the card, `false` to unfreeze.
   */
  freeze: boolean;
}

export interface CardIssueVirtualParams {
  /**
   * Specific spending controls and limits for this virtual card. Overrides default
   * policy if provided.
   */
  controls: CorporateCardControls;

  /**
   * Name or purpose for which the virtual card is issued.
   */
  holderName: string;

  /**
   * Brief description of the virtual card's intended use.
   */
  purpose: string;

  /**
   * Optional: Employee ID if this virtual card is tied to a specific employee.
   */
  associatedEmployeeId?: string | null;

  /**
   * Optional: Specific expiration date for the virtual card. Defaults to 1 year if
   * not provided.
   */
  expirationDate?: string | null;
}

export interface CardUpdateControlsParams {
  /**
   * Allow or disallow ATM cash withdrawals.
   */
  atmWithdrawals?: boolean;

  /**
   * Allow or disallow contactless (NFC) payments.
   */
  contactlessPayments?: boolean;

  /**
   * The daily spending limit in USD.
   */
  dailyLimit?: number;

  /**
   * Allow or disallow international transactions.
   */
  internationalTransactions?: boolean;

  /**
   * List of allowed merchant categories (MCCs). If empty, all are allowed subject to
   * other controls.
   */
  merchantCategoryRestrictions?: Array<string>;

  /**
   * The total spending limit in USD for the current calendar month.
   */
  monthlyLimit?: number;

  /**
   * Allow or disallow online transactions.
   */
  onlineTransactions?: boolean;

  /**
   * The maximum amount for a single transaction in USD.
   */
  singleTransactionLimit?: number;

  /**
   * Specific vendors or merchants that are explicitly allowed or blocked.
   */
  vendorRestrictions?: Array<string>;
}

export declare namespace Cards {
  export {
    type CorporateCard as CorporateCard,
    type CorporateCardControls as CorporateCardControls,
    type CardListResponse as CardListResponse,
    type CardFreezeParams as CardFreezeParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
    type CardUpdateControlsParams as CardUpdateControlsParams,
  };
}
