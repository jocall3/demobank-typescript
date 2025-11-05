// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Rules extends APIResource {
  /**
   * Creates a new custom AI-powered fraud detection rule, allowing organizations to
   * define specific criteria, risk scores, and automated responses to evolving
   * threat landscapes.
   *
   * @example
   * ```ts
   * const fraudRule =
   *   await client.corporate.risk.fraud.rules.create({
   *     actions: [{}],
   *     description:
   *       'Flags multiple small transactions (under $50) to different merchants within a very short timeframe (e.g., 5 transactions in 10 minutes), indicative of card testing.',
   *     name: 'High Velocity Small Transactions',
   *     severity: 'High',
   *     triggers: [{}],
   *   });
   * ```
   */
  create(body: RuleCreateParams, options?: RequestOptions): APIPromise<FraudRule> {
    return this._client.post('/corporate/risk/fraud/rules', { body, ...options });
  }

  /**
   * Retrieves a list of AI-powered fraud detection rules currently active for the
   * organization, including their parameters, thresholds, and associated actions
   * (e.g., flag, block, alert).
   *
   * @example
   * ```ts
   * const fraudRules =
   *   await client.corporate.risk.fraud.rules.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<RuleListResponse> {
    return this._client.get('/corporate/risk/fraud/rules', options);
  }
}

/**
 * Definition of an AI-powered fraud detection rule.
 */
export interface FraudRule {
  /**
   * Unique identifier for the fraud rule.
   */
  id?: string;

  /**
   * Automated actions to take when the rule is triggered.
   */
  actions?: Array<FraudRule.Action>;

  createdAt?: string;

  createdBy?: string;

  /**
   * Detailed description of the rule's logic.
   */
  description?: string;

  lastModifiedAt?: string;

  /**
   * Human-readable name for the rule.
   */
  name?: string;

  /**
   * Default severity for anomalies detected by this rule.
   */
  severity?: 'Low' | 'Medium' | 'High' | 'Critical';

  /**
   * Current status of the rule.
   */
  status?: 'active' | 'inactive' | 'draft';

  /**
   * Conditions that trigger the rule. Supports complex boolean logic.
   */
  triggers?: Array<FraudRule.Trigger>;
}

export namespace FraudRule {
  export interface Action {
    details?: string | null;

    type?: 'flag_for_review' | 'block_transaction' | 'freeze_card' | 'send_alert_email' | 'require_mfa';
  }

  export interface Trigger {
    metric?: 'transaction_amount' | 'account_activity_days' | 'transaction_count_24h' | 'ip_country_mismatch';

    operator?: 'gt' | 'lt' | 'eq' | 'gte' | 'lte';

    unit?: string | null;

    value?: string;
  }
}

export type RuleListResponse = Array<FraudRule>;

export interface RuleCreateParams {
  /**
   * Automated actions to take when the rule is triggered.
   */
  actions: Array<RuleCreateParams.Action>;

  /**
   * Detailed description of the rule's logic.
   */
  description: string;

  /**
   * Human-readable name for the new rule.
   */
  name: string;

  /**
   * Default severity for anomalies detected by this rule.
   */
  severity: 'Low' | 'Medium' | 'High' | 'Critical';

  /**
   * Conditions that trigger the rule.
   */
  triggers: Array<RuleCreateParams.Trigger>;

  /**
   * Initial status of the rule upon creation.
   */
  status?: 'active' | 'inactive' | 'draft';
}

export namespace RuleCreateParams {
  export interface Action {
    details?: string | null;

    type?: 'flag_for_review' | 'block_transaction' | 'freeze_card' | 'send_alert_email' | 'require_mfa';
  }

  export interface Trigger {
    additionalConditions?: Array<Trigger.AdditionalCondition>;

    metric?: 'transaction_amount' | 'account_activity_days' | 'transaction_count_24h' | 'ip_country_mismatch';

    operator?: 'gt' | 'lt' | 'eq' | 'gte' | 'lte';

    /**
     * Time window for aggregation in seconds (e.g., 600 for 10 minutes).
     */
    timeWindowSeconds?: number;

    value?: string;
  }

  export namespace Trigger {
    export interface AdditionalCondition {
      metric?: 'transaction_amount';

      operator?: 'lt';

      value?: string;
    }
  }
}

export declare namespace Rules {
  export {
    type FraudRule as FraudRule,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
  };
}
