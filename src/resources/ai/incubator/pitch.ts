// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pitch extends APIResource {
  /**
   * Retrieves the granular AI-driven analysis, strategic feedback, market validation
   * results, and any outstanding questions from Quantum Weaver for a specific
   * business pitch.
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.pitch.getDetails(
   *   'pitch_qw_synergychain-xyz',
   * );
   * ```
   */
  getDetails(pitchID: string, options?: RequestOptions): APIPromise<PitchGetDetailsResponse> {
    return this._client.get(path`/ai/incubator/pitch/${pitchID}/details`, options);
  }

  /**
   * Submits a detailed business plan to the Quantum Weaver AI for rigorous analysis,
   * market validation, and seed funding consideration. This initiates the AI-driven
   * incubation journey, aiming to transform innovative ideas into commercially
   * successful ventures.
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.pitch.submit({
   *   financialProjections: {
   *     seedRoundAmount: 2500000,
   *     valuationPreMoney: 10000000,
   *     projectionYears: 3,
   *     revenueForecast: [500000, 2000000, 6000000],
   *     profitabilityEstimate:
   *       'Achieve profitability within 18 months.',
   *   },
   * });
   * ```
   */
  submit(body: PitchSubmitParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ai/incubator/pitch', { body, ...options });
  }
}

export interface PitchGetDetailsResponse {
  /**
   * AI-generated coaching plan for the entrepreneur.
   */
  aiCoachingPlan?: unknown;

  /**
   * AI's detailed financial model analysis.
   */
  aiFinancialModel?: PitchGetDetailsResponse.AIFinancialModel;

  /**
   * AI's detailed market analysis.
   */
  aiMarketAnalysis?: unknown;

  /**
   * AI's assessment of risks associated with the venture.
   */
  aiRiskAssessment?: unknown;
}

export namespace PitchGetDetailsResponse {
  /**
   * AI's detailed financial model analysis.
   */
  export interface AIFinancialModel {
    costStructureAnalysis?: unknown;

    revenueBreakdown?: unknown;
  }
}

export type PitchSubmitResponse = unknown;

export interface PitchSubmitParams {
  /**
   * Key financial metrics and projections for the next 3-5 years.
   */
  financialProjections: unknown;
}

export declare namespace Pitch {
  export {
    type PitchGetDetailsResponse as PitchGetDetailsResponse,
    type PitchSubmitResponse as PitchSubmitResponse,
    type PitchSubmitParams as PitchSubmitParams,
  };
}
