// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Advisor extends APIResource {
  /**
   * Lists the available tools that the AI Advisor can utilize during a chat session.
   */
  listTools(
    query: AdvisorListToolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdvisorListToolsResponse> {
    return this._client.get('/ai/advisor/tools', { query, ...options });
  }

  /**
   * Sends a message to the Quantum AI Advisor and receives a response, potentially
   * including tool calls.
   */
  sendMessage(
    body: AdvisorSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<AdvisorSendMessageResponse> {
    return this._client.post('/ai/advisor/chat', { body, ...options });
  }
}

/**
 * AI-generated insight.
 */
export interface AIInsight {
  id: string;

  category:
    | 'spending'
    | 'saving'
    | 'investing'
    | 'budgeting'
    | 'security'
    | 'financial_goals'
    | 'sustainability'
    | 'corporate_treasury'
    | 'compliance'
    | 'other';

  description: string;

  severity: 'low' | 'medium' | 'high' | 'critical';

  timestamp: string;

  title: string;

  actionableRecommendation?: string | null;

  actionTrigger?: string | null;
}

export interface AdvisorListToolsResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<AdvisorListToolsResponse.Data>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export namespace AdvisorListToolsResponse {
  /**
   * Definition of an AI tool.
   */
  export interface Data {
    accessScope: string;

    description: string;

    name: string;

    parameters: unknown;
  }
}

/**
 * Response from AI.
 */
export interface AdvisorSendMessageResponse {
  sessionId: string;

  functionCalls?: Array<AdvisorSendMessageResponse.FunctionCall> | null;

  proactiveInsights?: Array<AIInsight> | null;

  requiresUserAction?: boolean;

  text?: string | null;
}

export namespace AdvisorSendMessageResponse {
  export interface FunctionCall {
    id?: string;

    args?: unknown;

    name?: string;
  }
}

export interface AdvisorListToolsParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export interface AdvisorSendMessageParams {
  functionResponse?: AdvisorSendMessageParams.FunctionResponse | null;

  message?: string;

  sessionId?: string | null;
}

export namespace AdvisorSendMessageParams {
  export interface FunctionResponse {
    name?: string;

    response?: unknown;
  }
}

export declare namespace Advisor {
  export {
    type AIInsight as AIInsight,
    type AdvisorListToolsResponse as AdvisorListToolsResponse,
    type AdvisorSendMessageResponse as AdvisorSendMessageResponse,
    type AdvisorListToolsParams as AdvisorListToolsParams,
    type AdvisorSendMessageParams as AdvisorSendMessageParams,
  };
}
