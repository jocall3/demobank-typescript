// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Investments extends APIResource {
  /**
   * Provides an AI-driven analysis of the Environmental, Social, and Governance
   * (ESG) impact of the user's entire investment portfolio, benchmarking against
   * industry standards and suggesting more sustainable alternatives.
   *
   *       example:
   *         code: UNAUTHENTICATED
   *         message: 'Authentication failed: Invalid or missing access token.'
   *         timestamp: '2024-07-22T08:00:00Z'
   *
   * '403': description: >-
   */
  analyzeImpact(options?: RequestOptions): APIPromise<InvestmentAnalyzeImpactResponse> {
    return this._client.get('/sustainability/investments/impact', options);
  }
}

export interface InvestmentAnalyzeImpactResponse {
  /**
   * Breakdown of the portfolio's ESG score by individual factors.
   */
  breakdownByESGFactors: unknown;
}

export declare namespace Investments {
  export { type InvestmentAnalyzeImpactResponse as InvestmentAnalyzeImpactResponse };
}
