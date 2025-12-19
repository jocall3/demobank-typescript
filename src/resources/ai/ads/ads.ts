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
   * Checks the status of a video generation operation.
   */
  getGenerationStatus(
    operationID: string,
    options?: RequestOptions,
  ): APIPromise<AdGetGenerationStatusResponse> {
    return this._client.get(path`/ai/ads/operations/${operationID}`, options);
  }
}

/**
 * Status of video generation.
 */
export interface AdGetGenerationStatusResponse {
  message: string;

  operationId: string;

  progressPercentage: number;

  status: 'queued' | 'generating' | 'rendering' | 'done' | 'error';

  errorMessage?: string | null;

  previewImageUri?: string | null;

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
