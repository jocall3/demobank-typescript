// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Fx extends APIResource {
  /**
   * Retrieves current and AI-predicted future foreign exchange rates for a specified
   * currency pair, including bid/ask spreads and historical volatility data for
   * informed decisions.
   */
  getRates(
    query: FxGetRatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FxGetRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

export interface FxGetRatesResponse {
  /**
   * Real-time foreign exchange rates.
   */
  currentRate: unknown;

  historicalVolatility?: unknown;
}

export interface FxGetRatesParams {
  /**
   * The base currency code (e.g., USD).
   */
  baseCurrency?: string;

  /**
   * Number of days into the future to provide an AI-driven prediction.
   */
  forecastDays?: number;

  /**
   * The target currency code (e.g., EUR).
   */
  targetCurrency?: string;
}

export declare namespace Fx {
  export { type FxGetRatesResponse as FxGetRatesResponse, type FxGetRatesParams as FxGetRatesParams };
}
