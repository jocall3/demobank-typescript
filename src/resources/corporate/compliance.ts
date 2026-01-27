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
   *   await client.corporate.compliance.requestAudit();
   * ```
   */
  requestAudit(body: ComplianceRequestAuditParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/corporate/compliance/audits', { body, ...options });
  }
}

export type ComplianceRequestAuditResponse = unknown;

export interface ComplianceRequestAuditParams {}

export declare namespace Compliance {
  export {
    type ComplianceRequestAuditResponse as ComplianceRequestAuditResponse,
    type ComplianceRequestAuditParams as ComplianceRequestAuditParams,
  };
}
