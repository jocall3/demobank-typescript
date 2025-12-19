// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvisorAPI from '../ai/advisor';
import * as InvestmentsAPI from './investments';
import { InvestmentAnalyzeImpactResponse, Investments } from './investments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sustainability extends APIResource {
  investments: InvestmentsAPI.Investments = new InvestmentsAPI.Investments(this._client);

  /**
   * Calculates the user's carbon footprint based on transaction history.
   */
  retrieveCarbonFootprint(
    options?: RequestOptions,
  ): APIPromise<SustainabilityRetrieveCarbonFootprintResponse> {
    return this._client.get('/sustainability/carbon-footprint', options);
  }
}

/**
 * Carbon footprint report.
 */
export interface SustainabilityRetrieveCarbonFootprintResponse {
  aiInsights: Array<AdvisorAPI.AIInsight>;

  breakdownByCategory: Array<SustainabilityRetrieveCarbonFootprintResponse.BreakdownByCategory>;

  period: string;

  reportId: string;

  totalCarbonFootprintKgCO2e: number;

  offsetRecommendations?: Array<SustainabilityRetrieveCarbonFootprintResponse.OffsetRecommendation> | null;
}

export namespace SustainabilityRetrieveCarbonFootprintResponse {
  export interface BreakdownByCategory {
    carbonFootprintKgCO2e?: number;

    category?: string;

    percentage?: number;
  }

  export interface OffsetRecommendation {
    costPerTonUSD?: number;

    offsetAmountKgCO2e?: number;

    project?: string;

    totalCostUSD?: number;
  }
}

Sustainability.Investments = Investments;

export declare namespace Sustainability {
  export { type SustainabilityRetrieveCarbonFootprintResponse as SustainabilityRetrieveCarbonFootprintResponse };

  export {
    Investments as Investments,
    type InvestmentAnalyzeImpactResponse as InvestmentAnalyzeImpactResponse,
  };
}
