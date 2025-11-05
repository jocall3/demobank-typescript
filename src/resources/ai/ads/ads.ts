// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as GenerateAPI from './generate';
import {
  Generate,
  GenerateCreateAdvancedParams,
  GenerateCreateAdvancedResponse,
  GenerateCreateParams,
  GenerateCreateResponse,
  GenerateVideo,
} from './generate';
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
  getGenerationStatus(
    operationID: string,
    options?: RequestOptions,
  ): APIPromise<AdGetGenerationStatusResponse> {
    return this._client.get(path`/ai/ads/operations/${operationID}`, options);
  }
}

/**
 * The real-time status of a video generation job, including progress and final
 * asset URI.
 */
export interface AdGetGenerationStatusResponse {
  /**
   * Detailed error message if the generation failed.
   */
  errorMessage?: string | null;

  /**
   * A descriptive message about the current stage of the operation.
   */
  message?: string;

  /**
   * The unique identifier for the video generation operation.
   */
  operationId?: string;

  /**
   * A URL to a static image preview of the generated video. Available during or
   * after generation.
   */
  previewImageUri?: string | null;

  /**
   * Estimated percentage completion of the video generation.
   */
  progressPercentage?: number | null;

  /**
   * Current status of the video generation process.
   */
  status?:
    | 'queued'
    | 'generating'
    | 'rendering'
    | 'encoding'
    | 'post_processing'
    | 'done'
    | 'error'
    | 'cancelled';

  /**
   * A temporary, signed URL to download the generated video file. Only present when
   * status is 'done'.
   */
  videoUri?: string | null;
}

Ads.Generate = Generate;

export declare namespace Ads {
  export { type AdGetGenerationStatusResponse as AdGetGenerationStatusResponse };

  export {
    Generate as Generate,
    type GenerateVideo as GenerateVideo,
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateAdvancedResponse as GenerateCreateAdvancedResponse,
    type GenerateCreateParams as GenerateCreateParams,
    type GenerateCreateAdvancedParams as GenerateCreateAdvancedParams,
  };
}
