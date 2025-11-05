// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Retrieves the current status and detailed information for a submitted loan
   * application, including AI underwriting outcomes, approved terms, and next steps.
   *
   * @example
   * ```ts
   * const loanApplicationStatus =
   *   await client.lending.applications.retrieve(
   *     'loan_app_creditflow-123',
   *   );
   * ```
   */
  retrieve(applicationID: string, options?: RequestOptions): APIPromise<LoanApplicationStatus> {
    return this._client.get(path`/lending/applications/${applicationID}`, options);
  }

  /**
   * Submits a new loan application, which is instantly processed and underwritten by
   * our Quantum AI, providing rapid decisions and personalized loan offers based on
   * real-time financial health data.
   *
   * @example
   * ```ts
   * const loanApplicationStatus =
   *   await client.lending.applications.submit({
   *     desiredTermMonths: 60,
   *     loanAmount: 25000,
   *     loanPurpose: 'home_improvement',
   *   });
   * ```
   */
  submit(body: ApplicationSubmitParams, options?: RequestOptions): APIPromise<LoanApplicationStatus> {
    return this._client.post('/lending/applications', { body, ...options });
  }
}

/**
 * Status and details of a loan application, including AI underwriting results.
 */
export interface LoanApplicationStatus {
  /**
   * Unique identifier for the loan application.
   */
  applicationId?: string;

  /**
   * AI-generated message explaining the application decision.
   */
  decisionMessage?: string;

  /**
   * Timestamp when the AI decision was made.
   */
  decisionTimestamp?: string;

  /**
   * If declined, the AI-identified primary reason for the decision.
   */
  declineReason?: string | null;

  /**
   * Annual Percentage Rate (APR) offered, if approved.
   */
  interestRate?: number | null;

  /**
   * The final approved loan amount, if approved.
   */
  loanAmountApproved?: number | null;

  /**
   * Estimated monthly repayment amount.
   */
  monthlyPayment?: number | null;

  /**
   * If approved, the expiration date for accepting the loan offer.
   */
  offerExpiration?: string | null;

  /**
   * URL to the detailed repayment schedule if the loan is approved and accepted.
   */
  repaymentScheduleUrl?: string | null;

  /**
   * Current status of the loan application.
   */
  status?: 'pending_review' | 'approved' | 'declined' | 'withdrawn' | 'funding_in_progress' | 'funded';

  /**
   * Approved repayment term in months.
   */
  termMonths?: number | null;
}

export interface ApplicationSubmitParams {
  /**
   * Desired repayment term in months.
   */
  desiredTermMonths: number;

  /**
   * The desired loan amount in USD.
   */
  loanAmount: number;

  /**
   * The primary purpose for the loan.
   */
  loanPurpose: 'personal_loan' | 'business_startup' | 'debt_consolidation' | 'home_improvement' | 'education';

  /**
   * Any additional information for the AI underwriter.
   */
  additionalNotes?: string | null;

  /**
   * Optional details for a co-applicant.
   */
  coApplicantInfo?: ApplicationSubmitParams.CoApplicantInfo | null;
}

export namespace ApplicationSubmitParams {
  /**
   * Optional details for a co-applicant.
   */
  export interface CoApplicantInfo {
    email?: string;

    name?: string;

    relationship?: string;
  }
}

export declare namespace Applications {
  export {
    type LoanApplicationStatus as LoanApplicationStatus,
    type ApplicationSubmitParams as ApplicationSubmitParams,
  };
}
