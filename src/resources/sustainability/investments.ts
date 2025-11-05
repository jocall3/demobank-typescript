// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Investments extends APIResource {
  /**
   * Provides an AI-driven analysis of the Environmental, Social, and Governance
   * (ESG) impact of the user's entire investment portfolio, benchmarking against
   * industry standards and suggesting more sustainable alternatives.
   */
  analyzeImpact(options?: RequestOptions): APIPromise<InvestmentAnalyzeImpactResponse> {
    return this._client.get('/sustainability/investments/impact', options);
  }
}

/**
 * Analysis of the ESG impact of an investment portfolio.
 */
export interface InvestmentAnalyzeImpactResponse {
  /**
   * AI-identified areas where the portfolio's ESG performance could be improved.
   */
  areasForImprovement?: string;

  /**
   * ESG score breakdown by Environmental, Social, and Governance pillars.
   */
  breakdownByPillar?: InvestmentAnalyzeImpactResponse.BreakdownByPillar;

  impactMetrics?: InvestmentAnalyzeImpactResponse.ImpactMetrics;

  /**
   * Overall ESG rating of the portfolio, based on aggregated holdings.
   */
  overallESGRating?: 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'CCC';

  /**
   * The ID of the investment portfolio analyzed.
   */
  portfolioId?: string;

  /**
   * List of top performing assets in terms of ESG within the portfolio.
   */
  topESGPerformers?: Array<InvestmentAnalyzeImpactResponse.TopEsgPerformer>;

  /**
   * A composite ESG score (e.g., out of 10).
   */
  totalESGScore?: number;
}

export namespace InvestmentAnalyzeImpactResponse {
  /**
   * ESG score breakdown by Environmental, Social, and Governance pillars.
   */
  export interface BreakdownByPillar {
    environmental?: number;

    governance?: number;

    social?: number;
  }

  export interface ImpactMetrics {
    /**
     * Weighted average carbon intensity of holdings.
     */
    carbonIntensityScore?: number;

    /**
     * Composite score for gender diversity in leadership.
     */
    genderDiversityScore?: number;

    /**
     * Percentage of portfolio invested in renewable energy.
     */
    renewableEnergyInvestmentPercent?: number;
  }

  export interface TopEsgPerformer {
    assetName?: string;

    /**
     * Percentage of portfolio value.
     */
    contributionToPortfolio?: number;

    esgScore?: number;
  }
}

export declare namespace Investments {
  export { type InvestmentAnalyzeImpactResponse as InvestmentAnalyzeImpactResponse };
}
