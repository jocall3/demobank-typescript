// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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

export interface CashFlowGetForecastResponse {
  /**
   * Forecast of cash inflows by source.
   */
  inflowForecast: unknown;

  /**
   * Forecast of cash outflows by category.
   */
  outflowForecast: unknown;
}

export interface CashFlowGetForecastParams {
  /**
   * The number of days into the future for which to generate the cash flow forecast
   * (e.g., 30, 90, 180).
   */
  forecastHorizonDays?: number;

  /**
   * If true, the forecast will include best-case and worst-case scenario analysis
   * alongside the most likely projection.
   */
  includeScenarioAnalysis?: boolean;
}

export declare namespace CashFlow {
  export {
    type CashFlowGetForecastResponse as CashFlowGetForecastResponse,
    type CashFlowGetForecastParams as CashFlowGetForecastParams,
  };
}
