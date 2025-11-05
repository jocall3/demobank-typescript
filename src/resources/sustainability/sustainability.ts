// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvestmentsAPI from './investments';
import { InvestmentAnalyzeImpactResponse, Investments } from './investments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sustainability extends APIResource {
  investments: InvestmentsAPI.Investments = new InvestmentsAPI.Investments(this._client);

  /**
   * Generates a detailed report of the user's estimated carbon footprint based on
   * transaction data, lifestyle choices, and AI-driven impact assessments, offering
   * insights and reduction strategies.
   */
  retrieveCarbonFootprint(
    options?: RequestOptions,
  ): APIPromise<SustainabilityRetrieveCarbonFootprintResponse> {
    return this._client.get('/sustainability/carbon-footprint', options);
  }
}

/**
 * A detailed report of the user's estimated carbon footprint, with breakdown and
 * recommendations.
 */
export interface SustainabilityRetrieveCarbonFootprintResponse {
  /**
   * Carbon footprint breakdown by spending category.
   */
  breakdownByCategory?: Array<SustainabilityRetrieveCarbonFootprintResponse.BreakdownByCategory>;

  /**
   * AI-generated comparison to relevant averages.
   */
  comparisonToAverage?: string;

  /**
   * Amount of carbon offsets purchased (if any) during the period.
   */
  offsetsPurchasedKgCO2e?: number;

  /**
   * Actionable recommendations to reduce carbon footprint.
   */
  recommendations?: Array<SustainabilityRetrieveCarbonFootprintResponse.Recommendation>;

  reportingPeriod?: SustainabilityRetrieveCarbonFootprintResponse.ReportingPeriod;

  /**
   * Total estimated carbon footprint for the reporting period (e.g., last month) in
   * kg CO2e.
   */
  totalCarbonFootprintKgCO2e?: number;
}

export namespace SustainabilityRetrieveCarbonFootprintResponse {
  export interface BreakdownByCategory {
    category?: string;

    kgCO2e?: number;

    percentage?: number;
  }

  export interface Recommendation {
    description?: string;

    estimatedImpactKgCO2e?: number;

    title?: string;
  }

  export interface ReportingPeriod {
    endDate?: string;

    startDate?: string;
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
