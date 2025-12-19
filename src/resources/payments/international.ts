// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class International extends APIResource {
  /**
   * Starts an international wire transfer or payment.
   */
  initiate(
    body: InternationalInitiateParams,
    options?: RequestOptions,
  ): APIPromise<InternationalInitiateResponse> {
    return this._client.post('/payments/international/initiate', { body, ...options });
  }
}

/**
 * Status of international payment.
 */
export interface InternationalInitiateResponse {
  fxRateApplied: number;

  paymentId: string;

  sourceAmount: number;

  sourceCurrency: string;

  status: 'in_progress' | 'held_for_review' | 'completed' | 'failed' | 'cancelled';

  targetAmount: number;

  targetCurrency: string;

  estimatedCompletionTime?: string | null;

  feesApplied?: number | null;

  message?: string | null;

  trackingUrl?: string | null;
}

export interface InternationalInitiateParams {
  amount: number;

  beneficiary: InternationalInitiateParams.Beneficiary;

  purpose: string;

  sourceAccountId: string;

  sourceCurrency: string;

  targetCurrency: string;

  fxRateLock?: boolean;

  fxRateProvider?: 'proprietary_ai' | 'market_rate';

  reference?: string | null;
}

export namespace InternationalInitiateParams {
  export interface Beneficiary {
    address: string;

    bankName: string;

    name: string;

    accountNumber?: string | null;

    iban?: string | null;

    routingNumber?: string | null;

    swiftBic?: string | null;
  }
}

export declare namespace International {
  export {
    type InternationalInitiateResponse as InternationalInitiateResponse,
    type InternationalInitiateParams as InternationalInitiateParams,
  };
}
