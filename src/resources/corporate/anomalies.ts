// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Anomalies extends APIResource {
  /**
   * Retrieves a comprehensive list of AI-detected financial anomalies across
   * transactions, payments, and corporate cards that require immediate review and
   * potential action to mitigate risk and ensure compliance.
   *
   * @example
   * ```ts
   * const anomalies = await client.corporate.anomalies.list();
   * ```
   */
  list(
    query: AnomalyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnomalyListResponse> {
    return this._client.get('/corporate/anomalies', { query, ...options });
  }

  /**
   * Updates the review status of a specific financial anomaly, allowing compliance
   * officers to mark it as dismissed, resolved, or escalate for further
   * investigation after thorough AI-assisted and human review.
   *
   * @example
   * ```ts
   * const financialAnomaly =
   *   await client.corporate.anomalies.updateStatus(
   *     'anom_risk-2024-07-21-D1E2F3',
   *     { status: 'Resolved' },
   *   );
   * ```
   */
  updateStatus(
    anomalyID: string,
    body: AnomalyUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<FinancialAnomaly> {
    return this._client.put(path`/corporate/anomalies/${anomalyID}/status`, { body, ...options });
  }
}

/**
 * An AI-detected financial anomaly requiring review by compliance or risk teams.
 */
export interface FinancialAnomaly {
  /**
   * Unique identifier for the financial anomaly.
   */
  id?: string;

  /**
   * AI's confidence in the detection of this anomaly.
   */
  aiConfidenceScore?: number;

  /**
   * A concise description of the anomaly.
   */
  description?: string;

  /**
   * AI-generated detailed explanation of why this event is considered an anomaly,
   * referencing deviation from normal patterns.
   */
  details?: string;

  /**
   * The unique identifier of the related financial entity (e.g., transaction ID,
   * card ID).
   */
  entityId?: string;

  /**
   * The type of financial entity or event related to the anomaly.
   */
  entityType?: 'PaymentOrder' | 'Transaction' | 'Counterparty' | 'CorporateCard' | 'Invoice' | 'Account';

  /**
   * AI-suggested immediate action for mitigation.
   */
  recommendedAction?: string | null;

  /**
   * List of other transaction IDs potentially related to this anomaly.
   */
  relatedTransactions?: Array<string>;

  /**
   * An AI-generated risk score from 0-100, indicating the probability and potential
   * impact of a fraudulent or non-compliant event.
   */
  riskScore?: number;

  /**
   * AI-assessed severity of the anomaly, indicating potential impact.
   */
  severity?: 'Low' | 'Medium' | 'High' | 'Critical';

  /**
   * Current review status of the anomaly.
   */
  status?: 'New' | 'Under Review' | 'Escalated' | 'Dismissed' | 'Resolved';

  /**
   * Timestamp when the anomaly was detected.
   */
  timestamp?: string;
}

export interface AnomalyListResponse {
  data?: Array<FinancialAnomaly>;

  limit?: number;

  offset?: number;

  total?: number;
}

export interface AnomalyListParams {
  /**
   * The inclusive end date for filtering data, in `YYYY-MM-DD` format. All items
   * before or on this date will be included.
   */
  endDate?: string;

  /**
   * Filter anomalies by the type of financial entity they are related to.
   */
  entityType?: 'PaymentOrder' | 'Transaction' | 'Counterparty' | 'CorporateCard' | 'Invoice';

  /**
   * The maximum number of items to return per page. Optimized for performance and
   * typical use cases.
   */
  limit?: number;

  /**
   * The starting index of the list for pagination. Use with `limit` for efficient
   * data retrieval.
   */
  offset?: number;

  /**
   * Filter anomalies by their AI-assessed severity level.
   */
  severity?: 'Low' | 'Medium' | 'High' | 'Critical';

  /**
   * The inclusive start date for filtering data, in `YYYY-MM-DD` format. All items
   * after or on this date will be included.
   */
  startDate?: string;

  /**
   * Filter anomalies by their current review status.
   */
  status?: 'New' | 'Under Review' | 'Escalated' | 'Dismissed' | 'Resolved';
}

export interface AnomalyUpdateStatusParams {
  /**
   * The new status for the financial anomaly.
   */
  status: 'Dismissed' | 'Resolved' | 'Under Review' | 'Escalated';

  /**
   * Optional notes regarding the resolution or dismissal of the anomaly.
   */
  resolutionNotes?: string | null;
}

export declare namespace Anomalies {
  export {
    type FinancialAnomaly as FinancialAnomaly,
    type AnomalyListResponse as AnomalyListResponse,
    type AnomalyListParams as AnomalyListParams,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
