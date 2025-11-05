// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class KYC extends APIResource {
  /**
   * Submits Know Your Customer (KYC) documentation, such as identity proofs and
   * address verification, for AI-accelerated compliance and identity verification,
   * crucial for higher service tiers and regulatory adherence.
   *
   * @example
   * ```ts
   * const response = await client.identity.kyc.submit({
   *   consentGiven: true,
   *   documentReference:
   *     'https://demobank-uploads.com/kyc/user_passport_scan.pdf',
   *   documentType: 'passport',
   * });
   * ```
   */
  submit(body: KYCSubmitParams, options?: RequestOptions): APIPromise<KYCSubmitResponse> {
    return this._client.post('/identity/kyc/submit', { body, ...options });
  }
}

/**
 * The current status of a KYC (Know Your Customer) verification submission.
 */
export interface KYCSubmitResponse {
  lastUpdated?: string;

  /**
   * A human-readable message regarding the status.
   */
  message?: string;

  /**
   * If rejected, the AI-identified reason for rejection.
   */
  rejectionReason?: string | null;

  /**
   * If additional information is required, a description of the necessary steps.
   */
  requiredActions?: string | null;

  /**
   * Current status of the KYC verification process.
   */
  status?:
    | 'pending_review'
    | 'in_progress'
    | 'additional_info_required'
    | 'approved'
    | 'rejected'
    | 'cancelled';

  /**
   * Unique identifier for the KYC submission.
   */
  submissionId?: string;
}

export interface KYCSubmitParams {
  /**
   * User's explicit consent for Demo Bank to process and verify the submitted
   * documents for KYC/AML purposes.
   */
  consentGiven: boolean;

  /**
   * A secure URL to the uploaded document image or scanned PDF. (e.g., from a
   * pre-signed S3 upload).
   */
  documentReference: string;

  /**
   * Type of identity document being submitted.
   */
  documentType: 'passport' | 'drivers_license' | 'national_id' | 'utility_bill' | 'bank_statement';

  /**
   * Secure URL to the uploaded address proof document.
   */
  addressProofReference?: string | null;

  /**
   * If submitting address proof, the type of document.
   */
  addressProofType?: 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'other' | null;

  /**
   * The document number (e.g., passport number, license number).
   */
  documentNumber?: string | null;

  expirationDate?: string | null;

  issueDate?: string | null;
}

export declare namespace KYC {
  export { type KYCSubmitResponse as KYCSubmitResponse, type KYCSubmitParams as KYCSubmitParams };
}
