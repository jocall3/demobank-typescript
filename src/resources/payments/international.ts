// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class International extends APIResource {
  /**
   * Facilitates the secure initiation of an international wire transfer to a
   * beneficiary in another country and currency, leveraging optimal FX rates and
   * tracking capabilities.
   *
   * @example
   * ```ts
   * const response =
   *   await client.payments.international.initiate({
   *     amount: 5000,
   *     beneficiary: {
   *       address: 'Hauptstrasse 1, 10115 Berlin, Germany',
   *       bankName: 'Deutsche Bank',
   *       iban: 'DE89370400440532013000',
   *       name: 'Maria Schmidt',
   *       swiftBic: 'DEUTDEFF',
   *     },
   *     purpose: 'Vendor payment for Q2 services.',
   *     sourceAccountId: 'acc_chase_checking_4567',
   *     sourceCurrency: 'USD',
   *     targetCurrency: 'EUR',
   *   });
   * ```
   */
  initiate(
    body: InternationalInitiateParams,
    options?: RequestOptions,
  ): APIPromise<InternationalInitiateResponse> {
    return this._client.post('/payments/international/initiate', { body, ...options });
  }
}

/**
 * Status of an international payment request.
 */
export interface InternationalInitiateResponse {
  /**
   * The foreign exchange rate applied (Target per Source, e.g., 0.90 EUR per 1 USD).
   */
  fxRateApplied: number;

  /**
   * Unique ID for the international payment.
   */
  paymentId: string;

  /**
   * The amount sent from the source account.
   */
  sourceAmount: number;

  /**
   * The currency of the source amount.
   */
  sourceCurrency: string;

  /**
   * Current status of the payment.
   */
  status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled' | 'held_for_review';

  /**
   * The estimated or actual amount to be received by the beneficiary in target
   * currency.
   */
  targetAmount: number;

  /**
   * The currency received by the beneficiary.
   */
  targetCurrency: string;

  /**
   * Estimated time when the payment will be completed.
   */
  estimatedCompletionTime?: string | null;

  /**
   * Total fees applied to the transfer (in source currency).
   */
  feesApplied?: number;

  /**
   * URL to a page for real-time payment tracking.
   */
  trackingUrl?: string | null;
}

export interface InternationalInitiateParams {
  /**
   * The amount to send in the source currency.
   */
  amount: number;

  /**
   * Details of the recipient.
   */
  beneficiary: InternationalInitiateParams.Beneficiary;

  /**
   * A description of the purpose of the transfer.
   */
  purpose: string;

  /**
   * The ID of the Demo Bank account from which to send funds.
   */
  sourceAccountId: string;

  /**
   * The currency of the source account.
   */
  sourceCurrency: string;

  /**
   * The currency the beneficiary will receive.
   */
  targetCurrency: string;

  /**
   * If true, attempts to lock the FX rate at the time of request for a limited
   * period.
   */
  fxRateLock?: boolean;

  /**
   * Strategy for selecting the foreign exchange rate provider.
   */
  fxRateProvider?: 'best_available' | 'proprietary_ai' | 'preferred_partner';
}

export namespace InternationalInitiateParams {
  /**
   * Details of the recipient.
   */
  export interface Beneficiary {
    address: string;

    bankName: string;

    iban: string;

    name: string;

    swiftBic: string;
  }
}

export declare namespace International {
  export {
    type InternationalInitiateResponse as InternationalInitiateResponse,
    type InternationalInitiateParams as InternationalInitiateParams,
  };
}
