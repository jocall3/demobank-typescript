// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Pitch extends APIResource {
  /**
   * Submits a new business pitch to the Quantum Weaver incubator for AI analysis.
   */
  submit(body: PitchSubmitParams, options?: RequestOptions): APIPromise<QuantumWeaverState> {
    return this._client.post('/ai/incubator/pitch', { body, ...options });
  }
}

/**
 * State of a business pitch.
 */
export interface QuantumWeaverState {
  lastUpdated: string;

  nextSteps: string;

  pitchId: string;

  stage:
    | 'submitted'
    | 'initial_review'
    | 'ai_analysis'
    | 'feedback_required'
    | 'test_phase'
    | 'final_review'
    | 'approved_for_funding'
    | 'rejected'
    | 'incubated_graduated';

  statusMessage: string;

  aiCoachingPlan?: QuantumWeaverState.AICoachingPlan | null;

  aiFinancialModel?: QuantumWeaverState.AIFinancialModel | null;

  aiMarketAnalysis?: QuantumWeaverState.AIMarketAnalysis | null;

  aiRiskAssessment?: QuantumWeaverState.AIRiskAssessment | null;

  estimatedFundingOffer?: number | null;

  feedbackSummary?: string | null;

  investorMatchScore?: number | null;

  questions?: Array<QuantumWeaverState.Question> | null;
}

export namespace QuantumWeaverState {
  export interface AICoachingPlan {
    steps?: Array<AICoachingPlan.Step>;

    summary?: string;

    title?: string;
  }

  export namespace AICoachingPlan {
    export interface Step {
      description?: string;

      resources?: Array<Step.Resource>;

      status?: 'pending' | 'in_progress' | 'completed';

      timeline?: string;

      title?: string;
    }

    export namespace Step {
      export interface Resource {
        name?: string;

        url?: string;
      }
    }
  }

  export interface AIFinancialModel {
    breakevenPoint?: string;

    capitalRequirements?: number;

    costStructureAnalysis?: unknown;

    revenueBreakdown?: unknown;

    sensitivityAnalysis?: Array<AIFinancialModel.SensitivityAnalysis>;
  }

  export namespace AIFinancialModel {
    export interface SensitivityAnalysis {
      projectedIRR?: number;

      scenario?: string;

      terminalValue?: number;
    }
  }

  export interface AIMarketAnalysis {
    competitiveAdvantages?: Array<string>;

    growthOpportunities?: string;

    riskFactors?: string;

    targetMarketSize?: string;
  }

  export interface AIRiskAssessment {
    marketRisk?: string;

    teamRisk?: string;

    technicalRisk?: string;
  }

  export interface Question {
    id?: string;

    category?: string;

    isRequired?: boolean;

    question?: string;
  }
}

export interface PitchSubmitParams {
  businessPlan: string;

  financialProjections: unknown;

  foundingTeam: Array<unknown>;

  marketOpportunity: string;
}

export declare namespace Pitch {
  export { type QuantumWeaverState as QuantumWeaverState, type PitchSubmitParams as PitchSubmitParams };
}
