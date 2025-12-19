// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Compliance extends APIResource {
  /**
   * Initiates a comprehensive compliance audit for a specified scope and period.
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
  auditScope: 'all_transactions' | 'specific_accounts' | 'specific_cards' | 'all_users';

  endDate: string;

  regulatoryFrameworks: Array<'AML' | 'KYC' | 'PCI-DSS' | 'GDPR' | 'CCPA' | 'SOX' | 'OFAC'>;

  startDate: string;

  additionalContext?: string | null;
}

export declare namespace Compliance {
  export {
    type ComplianceRequestAuditResponse as ComplianceRequestAuditResponse,
    type ComplianceRequestAuditParams as ComplianceRequestAuditParams,
  };
}
