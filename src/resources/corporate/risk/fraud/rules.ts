// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Rules extends APIResource {
  /**
   * Creates a new fraud detection rule.
   */
  create(body: RuleCreateParams, options?: RequestOptions): APIPromise<FraudRule> {
    return this._client.post('/corporate/risk/fraud/rules', { body, ...options });
  }

  /**
   * Lists configured fraud detection rules.
   */
  list(
    query: RuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleListResponse> {
    return this._client.get('/corporate/risk/fraud/rules', { query, ...options });
  }
}

/**
 * Fraud detection rule.
 */
export interface FraudRule {
  id: string;

  /**
   * Action to take on fraud detection.
   */
  action: FraudRule.Action;

  createdAt: string;

  createdBy: string;

  /**
   * Criteria for fraud detection.
   */
  criteria: FraudRule.Criteria;

  description: string;

  lastUpdated: string;

  name: string;

  severity: 'low' | 'medium' | 'high' | 'critical';

  status: 'active' | 'inactive' | 'draft';
}

export namespace FraudRule {
  /**
   * Action to take on fraud detection.
   */
  export interface Action {
    details: string;

    type: 'block' | 'alert' | 'auto_review' | 'manual_review' | 'request_mfa';

    targetTeam?: string | null;
  }

  /**
   * Criteria for fraud detection.
   */
  export interface Criteria {
    accountInactivityDays?: number | null;

    countryOfOrigin?: Array<string> | null;

    geographicDistanceKm?: number | null;

    lastLoginDays?: number | null;

    noTravelNotification?: boolean | null;

    paymentCountMin?: number | null;

    recipientCountryRiskLevel?: Array<'low' | 'medium' | 'high' | 'very_high'> | null;

    recipientNew?: boolean | null;

    timeframeHours?: number | null;

    transactionAmountMin?: number | null;

    transactionType?: 'debit' | 'credit' | null;
  }
}

export interface RuleListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<FraudRule>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export interface RuleCreateParams {
  /**
   * Action to take on fraud detection.
   */
  action: RuleCreateParams.Action;

  /**
   * Criteria for fraud detection.
   */
  criteria: RuleCreateParams.Criteria;

  description: string;

  name: string;

  severity: 'low' | 'medium' | 'high' | 'critical';

  status: 'active' | 'inactive' | 'draft';
}

export namespace RuleCreateParams {
  /**
   * Action to take on fraud detection.
   */
  export interface Action {
    details: string;

    type: 'block' | 'alert' | 'auto_review' | 'manual_review' | 'request_mfa';

    targetTeam?: string | null;
  }

  /**
   * Criteria for fraud detection.
   */
  export interface Criteria {
    accountInactivityDays?: number | null;

    countryOfOrigin?: Array<string> | null;

    geographicDistanceKm?: number | null;

    lastLoginDays?: number | null;

    noTravelNotification?: boolean | null;

    paymentCountMin?: number | null;

    recipientCountryRiskLevel?: Array<'low' | 'medium' | 'high' | 'very_high'> | null;

    recipientNew?: boolean | null;

    timeframeHours?: number | null;

    transactionAmountMin?: number | null;

    transactionType?: 'debit' | 'credit' | null;
  }
}

export interface RuleListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export declare namespace Rules {
  export {
    type FraudRule as FraudRule,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
  };
}
