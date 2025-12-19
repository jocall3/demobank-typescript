// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class KYC extends APIResource {
  /**
   * Submits documents for Know Your Customer (KYC) verification.
   */
  submit(body: KYCSubmitParams, options?: RequestOptions): APIPromise<KYCSubmitResponse> {
    return this._client.post('/identity/kyc/submit', { body, ...options });
  }
}

/**
 * KYC verification status.
 */
export interface KYCSubmitResponse {
  lastSubmissionDate: string | null;

  overallStatus: 'not_submitted' | 'in_review' | 'verified' | 'rejected' | 'requires_more_info';

  requiredActions: Array<string>;

  userId: string;

  rejectionReason?: string | null;

  verifiedTier?: 'bronze' | 'silver' | 'gold' | 'platinum' | null;
}

export interface KYCSubmitParams {
  countryOfIssue: string;

  documentNumber: string;

  documentType: 'drivers_license' | 'passport' | 'national_id' | 'utility_bill' | 'bank_statement' | 'other';

  expirationDate: string;

  issueDate: string;

  additionalDocuments?: Array<string> | null;

  documentBackImage?: string | null;

  documentFrontImage?: string | null;
}

export declare namespace KYC {
  export { type KYCSubmitResponse as KYCSubmitResponse, type KYCSubmitParams as KYCSubmitParams };
}
