// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Fx extends APIResource {
  /**
   * Retrieves current and AI-predicted future foreign exchange rates for a specified
   * currency pair, including bid/ask spreads and historical volatility data for
   * informed decisions.
   *
   * @example
   * ```ts
   * const response = await client.payments.fx.getRates({
   *   baseCurrency: 'USD',
   *   targetCurrency: 'EUR',
   * });
   * ```
   */
  getRates(query: FxGetRatesParams, options?: RequestOptions): APIPromise<FxGetRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

/**
 * Real-time and predictive foreign exchange rates.
 */
export interface FxGetRatesResponse {
  baseCurrency?: string;

  /**
   * Real-time bid, ask, and mid-market rates.
   */
  currentRate?: FxGetRatesResponse.CurrentRate;

  /**
   * Historical volatility metrics for the currency pair.
   */
  historicalVolatility?: FxGetRatesResponse.HistoricalVolatility;

  /**
   * AI-predicted FX rates for future dates with confidence intervals.
   */
  predictiveRates?: Array<FxGetRatesResponse.PredictiveRate>;

  targetCurrency?: string;
}

export namespace FxGetRatesResponse {
  /**
   * Real-time bid, ask, and mid-market rates.
   */
  export interface CurrentRate {
    ask?: number;

    bid?: number;

    mid?: number;

    timestamp?: string;
  }

  /**
   * Historical volatility metrics for the currency pair.
   */
  export interface HistoricalVolatility {
    past30Days?: number;

    past7Days?: number;
  }

  export interface PredictiveRate {
    /**
     * AI's confidence in the prediction.
     */
    aiModelConfidence?: number;

    confidenceIntervalLower?: number;

    confidenceIntervalUpper?: number;

    date?: string;

    predictedMidRate?: number;
  }
}

export interface FxGetRatesParams {
  /**
   * The base currency code (e.g., USD).
   */
  baseCurrency: string;

  /**
   * The target currency code (e.g., EUR).
   */
  targetCurrency: string;

  /**
   * Number of days into the future to provide an AI-driven prediction.
   */
  forecastDays?: number;
}

export declare namespace Fx {
  export { type FxGetRatesResponse as FxGetRatesResponse, type FxGetRatesParams as FxGetRatesParams };
}
