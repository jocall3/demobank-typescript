// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Anomalies extends APIResource {
  /**
   * Lists detected financial anomalies based on AI risk models.
   */
  list(
    query: AnomalyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnomalyListResponse> {
    return this._client.get('/corporate/anomalies', { query, ...options });
  }

  /**
   * Updates the status of a detected anomaly (e.g., dismiss or resolve).
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
 * Detected financial anomaly.
 */
export interface FinancialAnomaly {
  id: string;

  aiConfidenceScore: number;

  description: string;

  entityId: string;

  entityType: 'payment_order' | 'transaction' | 'counterparty' | 'corporate_card' | 'user' | 'invoice';

  recommendedAction: string | null;

  riskScore: number;

  severity: 'low' | 'medium' | 'high' | 'critical';

  status: 'new' | 'under_review' | 'escalated' | 'dismissed' | 'resolved';

  timestamp: string;

  details?: string | null;

  relatedTransactions?: Array<string> | null;

  resolutionNotes?: string | null;
}

export interface AnomalyListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<FinancialAnomaly>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export interface AnomalyListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * End date for filtering.
   */
  endDate?: string;

  /**
   * Filter by entity type.
   */
  entityType?: 'payment_order' | 'transaction' | 'counterparty' | 'corporate_card' | 'invoice';

  /**
   * Maximum number of items to return.
   */
  limit?: number;

  /**
   * Filter by severity.
   */
  severity?: 'low' | 'medium' | 'high' | 'critical';

  /**
   * Start date for filtering.
   */
  startDate?: string;

  /**
   * Filter by anomaly status.
   */
  status?: 'new' | 'under_review' | 'escalated' | 'dismissed' | 'resolved';
}

export interface AnomalyUpdateStatusParams {
  status: 'dismissed' | 'resolved' | 'under_review' | 'escalated';

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
