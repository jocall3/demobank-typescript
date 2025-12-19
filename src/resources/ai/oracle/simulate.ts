// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdvisorAPI from '../advisor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Simulate extends APIResource {
  /**
   * Executes a standard financial simulation based on a user prompt.
   */
  run(body: SimulateRunParams, options?: RequestOptions): APIPromise<SimulateRunResponse> {
    return this._client.post('/ai/oracle/simulate', { body, ...options });
  }

  /**
   * Executes a complex simulation with multiple scenarios and sensitivity analysis.
   */
  runAdvanced(
    body: SimulateRunAdvancedParams,
    options?: RequestOptions,
  ): APIPromise<SimulateRunAdvancedResponse> {
    return this._client.post('/ai/oracle/simulate/advanced', { body, ...options });
  }
}

/**
 * Simulation results.
 */
export interface SimulateRunResponse {
  keyImpacts: Array<SimulateRunResponse.KeyImpact>;

  narrativeSummary: string;

  simulationId: string;

  recommendations?: Array<AdvisorAPI.AIInsight> | null;

  riskAnalysis?: SimulateRunResponse.RiskAnalysis | null;

  visualizations?: Array<SimulateRunResponse.Visualization> | null;
}

export namespace SimulateRunResponse {
  export interface KeyImpact {
    metric?: string;

    severity?: 'low' | 'medium' | 'high';

    value?: string;
  }

  export interface RiskAnalysis {
    maxDrawdown?: number;

    volatilityIndex?: number;
  }

  export interface Visualization {
    dataUri?: string;

    title?: string;

    type?: 'line_chart' | 'bar_chart' | 'table';
  }
}

/**
 * Advanced simulation results.
 */
export interface SimulateRunAdvancedResponse {
  overallSummary: string;

  scenarioResults: Array<SimulateRunAdvancedResponse.ScenarioResult>;

  simulationId: string;

  strategicRecommendations?: Array<AdvisorAPI.AIInsight> | null;
}

export namespace SimulateRunAdvancedResponse {
  export interface ScenarioResult {
    narrativeSummary: string;

    scenarioName: string;

    aiInsights?: Array<AdvisorAPI.AIInsight> | null;

    finalNetWorthProjected?: number | null;

    liquidityMetrics?: ScenarioResult.LiquidityMetrics | null;

    sensitivityAnalysisGraphs?: Array<ScenarioResult.SensitivityAnalysisGraph> | null;
  }

  export namespace ScenarioResult {
    export interface LiquidityMetrics {
      minCashBalance?: number;

      recoveryTimeMonths?: number;
    }

    export interface SensitivityAnalysisGraph {
      data?: Array<SensitivityAnalysisGraph.Data>;

      paramName?: string;
    }

    export namespace SensitivityAnalysisGraph {
      export interface Data {
        outcomeValue?: number;

        paramValue?: number;
      }
    }
  }
}

export interface SimulateRunParams {
  prompt: string;

  parameters?: unknown | null;
}

export interface SimulateRunAdvancedParams {
  prompt: string;

  scenarios: Array<SimulateRunAdvancedParams.Scenario>;

  globalEconomicFactors?: SimulateRunAdvancedParams.GlobalEconomicFactors | null;

  personalAssumptions?: SimulateRunAdvancedParams.PersonalAssumptions | null;
}

export namespace SimulateRunAdvancedParams {
  export interface Scenario {
    durationYears: number;

    events: Array<Scenario.Event>;

    name: string;

    sensitivityAnalysisParams?: Array<Scenario.SensitivityAnalysisParam> | null;
  }

  export namespace Scenario {
    export interface Event {
      details?: unknown;

      type?: 'job_loss' | 'market_downturn' | 'large_purchase' | 'income_increase' | 'medical_emergency';
    }

    export interface SensitivityAnalysisParam {
      max?: number;

      min?: number;

      paramName?: string;

      step?: number;
    }
  }

  export interface GlobalEconomicFactors {
    inflationRate?: number;

    interestRateBaseline?: number;
  }

  export interface PersonalAssumptions {
    annualSavingsRate?: number;

    riskTolerance?: 'conservative' | 'moderate' | 'aggressive';
  }
}

export declare namespace Simulate {
  export {
    type SimulateRunResponse as SimulateRunResponse,
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunParams as SimulateRunParams,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
  };
}
