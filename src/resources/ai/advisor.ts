// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvisorAPI from './advisor';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Advisor extends APIResource {
  /**
   * Retrieves a dynamic manifest of all integrated AI tools that Quantum can invoke
   * and execute, providing details on their capabilities, parameters, and access
   * requirements.
   *
   * @example
   * ```ts
   * const response = await client.ai.advisor.listTools();
   * ```
   */
  listTools(options?: RequestOptions): APIPromise<AdvisorListToolsResponse> {
    return this._client.get('/ai/advisor/tools', options);
  }

  /**
   * Initiates or continues a sophisticated conversation with Quantum, the AI
   * Advisor. Quantum can provide advanced financial insights, execute complex tasks
   * via an expanding suite of intelligent tools, and learn from user interactions to
   * offer hyper-personalized guidance.
   *
   * @example
   * ```ts
   * const response = await client.ai.advisor.sendMessage();
   * ```
   */
  sendMessage(
    body: AdvisorSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<AdvisorSendMessageResponse> {
    return this._client.post('/ai/advisor/chat', { body, ...options });
  }
}

/**
 * A proactive, AI-generated financial insight or recommendation.
 */
export interface AIInsight {
  /**
   * Unique ID for the insight.
   */
  id?: string;

  /**
   * An optional, concrete action the user can take.
   */
  actionableRecommendation?: string | null;

  /**
   * Category of the financial insight.
   */
  category?: 'spending' | 'saving' | 'investing' | 'debt' | 'goals' | 'security' | 'income' | 'compliance';

  /**
   * Detailed explanation of the insight.
   */
  description?: string;

  /**
   * An optional tool call that, if executed, can address the insight.
   */
  relatedToolCall?: AIToolCall | null;

  /**
   * Severity level of the insight.
   */
  severity?: 'low' | 'medium' | 'high' | 'critical';

  timestamp?: string;

  /**
   * Concise title for the insight.
   */
  title?: string;
}

/**
 * A structured representation of an AI's request to execute an external tool or
 * function.
 */
export interface AIToolCall {
  /**
   * Unique identifier for this tool call.
   */
  id?: string;

  /**
   * A JSON object containing the arguments required by the tool, as inferred by the
   * AI.
   */
  args?: unknown;

  /**
   * The name of the tool/function to be executed.
   */
  name?: string;
}

export type AdvisorListToolsResponse = Array<AdvisorListToolsResponse.AdvisorListToolsResponseItem>;

export namespace AdvisorListToolsResponse {
  /**
   * Definition of an AI-callable tool, including its name, description, and expected
   * parameters.
   */
  export interface AdvisorListToolsResponseItem {
    /**
     * The OAuth2 scope required to execute this tool.
     */
    accessScope?: string;

    /**
     * A human-readable description of what the tool does.
     */
    description?: string;

    /**
     * The programmatic name of the tool.
     */
    name?: string;

    /**
     * OpenAPI Schema Object defining the input parameters for the tool.
     */
    parameters?: unknown;
  }
}

/**
 * Quantum AI Advisor's rich response, potentially including conversational text,
 * proactive insights, and calls to external tools for execution.
 */
export interface AdvisorSendMessageResponse {
  /**
   * A list of tool calls that the AI wants the system to execute based on the user's
   * request. These must be executed by the client/system.
   */
  functionCalls?: Array<AIToolCall>;

  /**
   * Proactive, AI-generated insights or recommendations relevant to the conversation
   * or user's financial state.
   */
  proactiveInsights?: Array<AIInsight>;

  /**
   * The active session ID for this conversation.
   */
  sessionId?: string;

  /**
   * The natural language text response from the AI.
   */
  text?: string;
}

export interface AdvisorSendMessageParams {
  /**
   * Previous turns in the conversation for maintaining context. AI processes
   * messages within this context.
   */
  context?: Array<AdvisorSendMessageParams.Context> | null;

  /**
   * The structured result from a tool call that was previously requested by the AI.
   * This is how the AI receives data back from executed actions.
   */
  functionResponse?: AdvisorSendMessageParams.FunctionResponse | null;

  /**
   * The user's natural language message to the AI.
   */
  message?: string;

  /**
   * Unique ID to maintain conversation history and context across turns. A new
   * session is automatically created if omitted.
   */
  sessionId?: string | null;
}

export namespace AdvisorSendMessageParams {
  export interface Context {
    content?: string;

    role?: 'user' | 'assistant' | 'tool';

    toolCallId?: string | null;

    toolCalls?: Array<AdvisorAPI.AIToolCall> | null;
  }

  /**
   * The structured result from a tool call that was previously requested by the AI.
   * This is how the AI receives data back from executed actions.
   */
  export interface FunctionResponse {
    /**
     * The name of the tool that was executed.
     */
    name?: string;

    /**
     * The JSON object representing the output of the tool's execution.
     */
    response?: unknown;
  }
}

export declare namespace Advisor {
  export {
    type AIInsight as AIInsight,
    type AIToolCall as AIToolCall,
    type AdvisorListToolsResponse as AdvisorListToolsResponse,
    type AdvisorSendMessageResponse as AdvisorSendMessageResponse,
    type AdvisorSendMessageParams as AdvisorSendMessageParams,
  };
}
