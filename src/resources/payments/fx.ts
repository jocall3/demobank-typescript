// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Fx extends APIResource {
  /**
   * Retrieves current and forecasted foreign exchange rates.
   */
  getRates(query: FxGetRatesParams, options?: RequestOptions): APIPromise<FxGetRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

/**
 * FX rate data.
 */
export interface FxGetRatesResponse {
  baseCurrency: string;

  currentRate: FxGetRatesResponse.CurrentRate;

  targetCurrency: string;

  historicalVolatility?: FxGetRatesResponse.HistoricalVolatility | null;

  predictiveRates?: Array<FxGetRatesResponse.PredictiveRate> | null;
}

export namespace FxGetRatesResponse {
  export interface CurrentRate {
    ask?: number;

    bid?: number;

    mid?: number;

    timestamp?: string;
  }

  export interface HistoricalVolatility {
    past30Days?: number;

    past7Days?: number;
  }

  export interface PredictiveRate {
    aiModelConfidence?: number;

    confidenceIntervalLower?: number;

    confidenceIntervalUpper?: number;

    date?: string;

    predictedMidRate?: number;
  }
}

export interface FxGetRatesParams {
  /**
   * Base currency code (e.g., USD).
   */
  baseCurrency: string;

  /**
   * Target currency code (e.g., EUR).
   */
  targetCurrency: string;

  /**
   * Number of days to forecast rates.
   */
  forecastDays?: number;
}

export declare namespace Fx {
  export { type FxGetRatesResponse as FxGetRatesResponse, type FxGetRatesParams as FxGetRatesParams };
}
