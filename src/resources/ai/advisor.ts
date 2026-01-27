// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  listTools(
    query: AdvisorListToolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get('/ai/advisor/tools', { query, ...options });
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
    body: AdvisorSendMessageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post('/ai/advisor/chat', { body, ...options });
  }
}

export type AdvisorListToolsResponse = unknown;

export type AdvisorSendMessageResponse = unknown;

export interface AdvisorListToolsParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export interface AdvisorSendMessageParams {
  /**
   * Optional: The output from a tool function that the AI previously requested to be
   * executed.
   */
  functionResponse?: unknown;
}

export declare namespace Advisor {
  export {
    type AdvisorListToolsResponse as AdvisorListToolsResponse,
    type AdvisorSendMessageResponse as AdvisorSendMessageResponse,
    type AdvisorListToolsParams as AdvisorListToolsParams,
    type AdvisorSendMessageParams as AdvisorSendMessageParams,
  };
}
