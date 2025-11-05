// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdvisorAPI from '../advisor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Simulate extends APIResource {
  /**
   * Submits a hypothetical scenario to the Quantum Oracle AI for standard financial
   * impact analysis. The AI simulates the effect on the user's current financial
   * state and provides a summary.
   *
   * @example
   * ```ts
   * const response = await client.ai.oracle.simulate.run({
   *   prompt:
   *     'What if I invest an additional $1,000 per month into my aggressive growth portfolio for the next 5 years?',
   * });
   * ```
   */
  run(body: SimulateRunParams, options?: RequestOptions): APIPromise<SimulateRunResponse> {
    return this._client.post('/ai/oracle/simulate', { body, ...options });
  }

  /**
   * Engages the Quantum Oracle for highly complex, multi-variable simulations,
   * allowing precise control over numerous financial parameters, market conditions,
   * and personal events to generate deep, predictive insights and sensitivity
   * analysis.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.simulate.runAdvanced({
   *     prompt:
   *       'Evaluate the long-term impact of a sudden job loss combined with a variable market downturn, analyzing worst-case and best-case recovery scenarios over a decade.',
   *     scenarios: [{}],
   *   });
   * ```
   */
  runAdvanced(
    body: SimulateRunAdvancedParams,
    options?: RequestOptions,
  ): APIPromise<SimulateRunAdvancedResponse> {
    return this._client.post('/ai/oracle/simulate/advanced', { body, ...options });
  }
}

/**
 * Detailed results of a financial simulation from Quantum Oracle.
 */
export interface SimulateRunResponse {
  /**
   * A list of critical financial metrics and their projected impact.
   */
  keyImpacts?: Array<SimulateRunResponse.KeyImpact>;

  /**
   * An AI-generated, easy-to-understand summary of the simulation's outcome and key
   * takeaways.
   */
  narrativeSummary?: string;

  /**
   * AI-generated, actionable recommendations based on the simulation results.
   */
  recommendations?: Array<SimulateRunResponse.Recommendation>;

  /**
   * Analysis of potential risks associated with the simulated scenario.
   */
  riskAnalysis?: SimulateRunResponse.RiskAnalysis;

  /**
   * Unique ID for the completed simulation.
   */
  simulationId?: string;
}

export namespace SimulateRunResponse {
  export interface KeyImpact {
    metric?: string;

    /**
     * Indicates the positive/negative magnitude of the impact. 'High' for significant
     * positive or negative change.
     */
    severity?: 'low' | 'medium' | 'high';

    value?: string;
  }

  export interface Recommendation {
    /**
     * An optional trigger for a specific action within the Demo Bank ecosystem.
     */
    actionTrigger?: string | null;

    description?: string;

    title?: string;
  }

  /**
   * Analysis of potential risks associated with the simulated scenario.
   */
  export interface RiskAnalysis {
    /**
     * Simulated maximum percentage drawdown.
     */
    maxDrawdown?: number;

    /**
     * Expected volatility index.
     */
    volatilityIndex?: number;
  }
}

/**
 * Comprehensive results from an advanced multi-variable financial simulation.
 */
export interface SimulateRunAdvancedResponse {
  /**
   * An AI-generated executive summary across all simulated scenarios.
   */
  overallSummary?: string;

  scenarioResults?: Array<SimulateRunAdvancedResponse.ScenarioResult>;

  simulationId?: string;

  /**
   * Holistic, AI-driven strategic recommendations across all scenarios.
   */
  strategicRecommendations?: Array<AdvisorAPI.AIInsight>;
}

export namespace SimulateRunAdvancedResponse {
  /**
   * Results for each individual scenario simulated.
   */
  export interface ScenarioResult {
    finalNetWorthProjected?: number;

    liquidityMetrics?: ScenarioResult.LiquidityMetrics;

    narrativeSummary?: string;

    scenarioName?: string;

    sensitivityAnalysisGraphs?: Array<ScenarioResult.SensitivityAnalysisGraph>;
  }

  export namespace ScenarioResult {
    export interface LiquidityMetrics {
      /**
       * Lowest cash balance reached.
       */
      minCashBalance?: number;

      /**
       * Months to regain initial financial position.
       */
      recoveryTimeMonths?: number;
    }

    export interface SensitivityAnalysisGraph {
      /**
       * Data points for plotting sensitivity curve.
       */
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
  /**
   * A natural language description of the hypothetical scenario to simulate.
   */
  prompt: string;

  /**
   * Key numerical parameters to guide the simulation, allowing the AI to focus on
   * specific variables.
   */
  parameters?: SimulateRunParams.Parameters;
}

export namespace SimulateRunParams {
  /**
   * Key numerical parameters to guide the simulation, allowing the AI to focus on
   * specific variables.
   */
  export interface Parameters {
    /**
     * Duration of the scenario in years.
     */
    durationYears?: number;

    /**
     * Monthly investment amount in USD.
     */
    monthlyInvestmentAmount?: number;

    /**
     * Simulated risk tolerance for investment scenarios.
     */
    riskTolerance?: 'low' | 'medium' | 'high' | 'aggressive';
  }
}

export interface SimulateRunAdvancedParams {
  /**
   * An overarching natural language prompt for the advanced simulation.
   */
  prompt: string;

  scenarios: Array<SimulateRunAdvancedParams.Scenario>;
}

export namespace SimulateRunAdvancedParams {
  /**
   * Individual scenarios to simulate and compare.
   */
  export interface Scenario {
    /**
     * Total duration of this scenario in years.
     */
    durationYears?: number;

    /**
     * A sequence of financial events to apply in this scenario.
     */
    events?: Array<Scenario.Event>;

    /**
     * Name for this specific scenario.
     */
    name?: string;

    /**
     * Parameters to vary for sensitivity analysis within this scenario.
     */
    sensitivityAnalysisParams?: Array<Scenario.SensitivityAnalysisParam>;
  }

  export namespace Scenario {
    export interface Event {
      details?: unknown;

      type?: 'job_loss' | 'market_downturn' | 'salary_increase' | 'unexpected_expense' | 'windfall';
    }

    export interface SensitivityAnalysisParam {
      max?: number;

      min?: number;

      paramName?: string;

      step?: number;
    }
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
