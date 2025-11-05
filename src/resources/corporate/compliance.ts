// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Compliance extends APIResource {
  /**
   * Initiates an AI-powered compliance audit for a specific period or scope,
   * generating a comprehensive report detailing adherence to regulatory frameworks,
   * internal policies, and flagging potential risks.
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.requestAudit({
   *     auditScope: 'all_transactions',
   *     endDate: '2024-06-30',
   *     startDate: '2024-01-01',
   *   });
   * ```
   */
  requestAudit(
    body: ComplianceRequestAuditParams,
    options?: RequestOptions,
  ): APIPromise<ComplianceRequestAuditResponse> {
    return this._client.post('/corporate/compliance/audits', { body, ...options });
  }
}

export interface ComplianceRequestAuditResponse {
  auditId?: string;

  status?: 'initiated' | 'processing' | 'completed' | 'failed';
}

export interface ComplianceRequestAuditParams {
  /**
   * The scope of the compliance audit.
   */
  auditScope: 'all_transactions' | 'corporate_cards' | 'international_payments' | 'specific_entity';

  /**
   * End date for the audit period (inclusive).
   */
  endDate: string;

  /**
   * Start date for the audit period (inclusive).
   */
  startDate: string;

  /**
   * Optional: If `auditScope` is `specific_entity`, the ID of the entity (e.g.,
   * corporate card ID, counterparty ID).
   */
  entityId?: string | null;

  /**
   * Optional: Specific regulatory frameworks to audit against (e.g., 'GDPR',
   * 'PCI-DSS', 'AML').
   */
  regulatoryFrameworks?: Array<string> | null;
}

export declare namespace Compliance {
  export {
    type ComplianceRequestAuditResponse as ComplianceRequestAuditResponse,
    type ComplianceRequestAuditParams as ComplianceRequestAuditParams,
  };
}
