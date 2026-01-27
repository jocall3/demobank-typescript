// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Generate extends APIResource {
  /**
   * Submits a request to generate a high-quality video ad using the advanced Veo 2.0
   * generative AI model. This is an asynchronous operation, suitable for standard ad
   * content creation.
   *
   * @example
   * ```ts
   * const generate = await client.ai.ads.generate.create();
   * ```
   */
  create(body: GenerateCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ai/ads/generate', { body, ...options });
  }
}

export type GenerateCreateResponse = unknown;

export interface GenerateCreateParams {}

export declare namespace Generate {
  export {
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateParams as GenerateCreateParams,
  };
}
