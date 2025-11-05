// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdvisorAPI from '../../ai/advisor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class CashFlow extends APIResource {
  /**
   * Retrieves an advanced AI-driven cash flow forecast for the organization,
   * projecting liquidity, identifying potential surpluses or deficits, and providing
   * recommendations for optimal treasury management.
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.cashFlow.getForecast();
   * ```
   */
  getForecast(
    query: CashFlowGetForecastParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CashFlowGetForecastResponse> {
    return this._client.get('/corporate/treasury/cash-flow/forecast', { query, ...options });
  }
}

/**
 * AI-driven cash flow forecast for an organization, projecting liquidity and
 * identifying trends.
 */
export interface CashFlowGetForecastResponse {
  /**
   * The starting date of the forecast.
   */
  baseDate?: string;

  /**
   * The number of days into the future for the forecast.
   */
  forecastHorizonDays?: number;

  /**
   * AI-projected inflows categorized.
   */
  inflowProjections?: CashFlowGetForecastResponse.InflowProjections;

  /**
   * AI-generated alerts for potential liquidity issues or opportunities.
   */
  liquidityAlerts?: Array<CashFlowGetForecastResponse.LiquidityAlert>;

  /**
   * Daily projection of the organization's net cash balance.
   */
  netCashFlowProjection?: Array<CashFlowGetForecastResponse.NetCashFlowProjection>;

  /**
   * The ID of the organization for which the forecast was generated.
   */
  organizationId?: string;

  /**
   * AI-projected outflows categorized.
   */
  outflowProjections?: CashFlowGetForecastResponse.OutflowProjections;

  /**
   * AI-driven recommendations for optimizing cash flow and liquidity.
   */
  recommendations?: Array<AdvisorAPI.AIInsight>;

  /**
   * Optional: AI-generated best-case, worst-case, and most-likely scenarios.
   */
  scenarioAnalysis?: Array<CashFlowGetForecastResponse.ScenarioAnalysis>;
}

export namespace CashFlowGetForecastResponse {
  /**
   * AI-projected inflows categorized.
   */
  export interface InflowProjections {
    investmentIncome?: number;

    salesRevenue?: number;

    /**
     * Total projected inflows for the horizon.
     */
    total?: number;
  }

  export interface LiquidityAlert {
    date?: string;

    message?: string;

    type?: 'deficit' | 'surplus' | 'low_threshold';
  }

  export interface NetCashFlowProjection {
    date?: string;

    projectedBalance?: number;
  }

  /**
   * AI-projected outflows categorized.
   */
  export interface OutflowProjections {
    operatingExpenses?: number;

    payroll?: number;

    /**
     * Total projected outflows for the horizon.
     */
    total?: number;

    vendorPayments?: number;
  }

  export interface ScenarioAnalysis {
    impactOnCashFlow?: number;

    riskProbability?: number;

    scenarioName?: string;
  }
}

export interface CashFlowGetForecastParams {
  /**
   * The number of days into the future for which the AI should generate a forecast.
   * Max 365 days.
   */
  forecastHorizonDays?: number;

  /**
   * If true, the forecast will include AI-generated best-case, worst-case, and
   * most-likely scenarios.
   */
  includeScenarioAnalysis?: boolean;
}

export declare namespace CashFlow {
  export {
    type CashFlowGetForecastResponse as CashFlowGetForecastResponse,
    type CashFlowGetForecastParams as CashFlowGetForecastParams,
  };
}
