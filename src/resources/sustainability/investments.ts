// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvisorAPI from '../ai/advisor';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Investments extends APIResource {
  /**
   * Analyzes the ESG impact of the user's investment portfolio.
   */
  analyzeImpact(options?: RequestOptions): APIPromise<InvestmentAnalyzeImpactResponse> {
    return this._client.get('/sustainability/investments/impact', options);
  }
}

/**
 * ESG impact of investments.
 */
export interface InvestmentAnalyzeImpactResponse {
  aiRecommendations: Array<AdvisorAPI.AIInsight>;

  benchmarkESGScore: number;

  breakdownByESGFactors: InvestmentAnalyzeImpactResponse.BreakdownByEsgFactors;

  lowestESGHoldings: Array<InvestmentAnalyzeImpactResponse.LowestEsgHolding>;

  overallESGScore: number;

  portfolioId: string;

  topESGHoldings: Array<InvestmentAnalyzeImpactResponse.TopEsgHolding>;
}

export namespace InvestmentAnalyzeImpactResponse {
  export interface BreakdownByEsgFactors {
    environmentalScore?: number;

    governanceScore?: number;

    socialScore?: number;
  }

  export interface LowestEsgHolding {
    assetName?: string;

    assetSymbol?: string;

    esgScore?: number;
  }

  export interface TopEsgHolding {
    assetName?: string;

    assetSymbol?: string;

    esgScore?: number;
  }
}

export declare namespace Investments {
  export { type InvestmentAnalyzeImpactResponse as InvestmentAnalyzeImpactResponse };
}
