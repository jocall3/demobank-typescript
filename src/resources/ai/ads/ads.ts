// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as GenerateAPI from './generate';
import { Generate, GenerateCreateParams, GenerateCreateResponse } from './generate';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Ads extends APIResource {
  generate: GenerateAPI.Generate = new GenerateAPI.Generate(this._client);

  /**
   * Polls the real-time status of an asynchronous video generation operation. Once
   * complete ('done'), the response includes a temporary, signed URL to access and
   * download the generated video asset.
   *
   * @example
   * ```ts
   * const response = await client.ai.ads.getGenerationStatus(
   *   'op-video-gen-12345-abcde',
   * );
   * ```
   */
  getGenerationStatus(operationID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/ai/ads/operations/${operationID}`, options);
  }
}

export type AdGetGenerationStatusResponse = unknown;

Ads.Generate = Generate;

export declare namespace Ads {
  export { type AdGetGenerationStatusResponse as AdGetGenerationStatusResponse };

  export {
    Generate as Generate,
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateParams as GenerateCreateParams,
  };
}
