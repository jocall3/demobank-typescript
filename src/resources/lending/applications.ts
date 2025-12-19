// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Retrieves the status of a loan application.
   */
  retrieve(applicationID: string, options?: RequestOptions): APIPromise<LoanApplicationStatus> {
    return this._client.get(path`/lending/applications/${applicationID}`, options);
  }

  /**
   * Submits a loan application for AI underwriting.
   */
  submit(body: ApplicationSubmitParams, options?: RequestOptions): APIPromise<LoanApplicationStatus> {
    return this._client.post('/lending/applications', { body, ...options });
  }
}

/**
 * Status of loan application.
 */
export interface LoanApplicationStatus {
  applicationDate: string;

  applicationId: string;

  loanAmountRequested: number;

  loanPurpose:
    | 'home_improvement'
    | 'debt_consolidation'
    | 'medical_expense'
    | 'education'
    | 'auto_purchase'
    | 'other';

  nextSteps: string;

  status:
    | 'submitted'
    | 'underwriting'
    | 'approved'
    | 'declined'
    | 'pending_acceptance'
    | 'funded'
    | 'cancelled';

  /**
   * AI underwriting decision.
   */
  aiUnderwritingResult?: LoanApplicationStatus.AIUnderwritingResult;

  /**
   * Loan offer details.
   */
  offerDetails?: LoanApplicationStatus.OfferDetails;
}

export namespace LoanApplicationStatus {
  /**
   * AI underwriting decision.
   */
  export interface AIUnderwritingResult {
    aiConfidence: number;

    decision: 'approved' | 'declined' | 'referred_to_human';

    reason: string;

    maxApprovedAmount?: number | null;

    recommendedInterestRate?: number | null;
  }

  /**
   * Loan offer details.
   */
  export interface OfferDetails {
    amount: number;

    expirationDate: string;

    interestRate: number;

    isPreApproved: boolean;

    offerId: string;

    offerType: 'personal_loan' | 'auto_loan' | 'mortgage' | 'credit_line' | 'microloan';

    aiPersonalizationScore?: number | null;

    monthlyPayment?: number | null;

    originationFee?: number | null;

    repaymentTermMonths?: number | null;

    termsAndConditionsUrl?: string | null;

    totalRepayable?: number | null;
  }
}

export interface ApplicationSubmitParams {
  loanAmount: number;

  loanPurpose:
    | 'home_improvement'
    | 'debt_consolidation'
    | 'medical_expense'
    | 'education'
    | 'auto_purchase'
    | 'other';

  repaymentTermMonths: number;

  additionalNotes?: string | null;

  coApplicant?: ApplicationSubmitParams.CoApplicant | null;
}

export namespace ApplicationSubmitParams {
  export interface CoApplicant {
    email?: string;

    income?: number;

    name?: string;
  }
}

export declare namespace Applications {
  export {
    type LoanApplicationStatus as LoanApplicationStatus,
    type ApplicationSubmitParams as ApplicationSubmitParams,
  };
}
