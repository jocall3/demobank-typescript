// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Generate extends APIResource {
  /**
   * Initiates the generation of a video advertisement based on a prompt.
   */
  create(body: GenerateCreateParams, options?: RequestOptions): APIPromise<GenerateCreateResponse> {
    return this._client.post('/ai/ads/generate', { body, ...options });
  }

  /**
   * Initiates advanced video generation with fine-grained control over style, audio,
   * and branding.
   */
  createAdvanced(
    body: GenerateCreateAdvancedParams,
    options?: RequestOptions,
  ): APIPromise<GenerateCreateAdvancedResponse> {
    return this._client.post('/ai/ads/generate/advanced', { body, ...options });
  }
}

/**
 * Payload to generate video.
 */
export interface GenerateVideo {
  lengthSeconds: number;

  prompt: string;

  style: 'Cinematic' | 'Explainer' | 'Documentary' | 'Abstract' | 'Minimalist';

  aspectRatio?: '16:9' | '9:16' | '1:1';

  brandColors?: Array<string> | null;

  keywords?: Array<string> | null;
}

export interface GenerateCreateResponse {
  estimatedCompletionTimeSeconds?: number;

  operationId?: string;
}

export interface GenerateCreateAdvancedResponse {
  estimatedCompletionTimeSeconds?: number;

  operationId?: string;
}

export interface GenerateCreateParams {
  lengthSeconds: number;

  prompt: string;

  style: 'Cinematic' | 'Explainer' | 'Documentary' | 'Abstract' | 'Minimalist';

  aspectRatio?: '16:9' | '9:16' | '1:1';

  brandColors?: Array<string> | null;

  keywords?: Array<string> | null;
}

export interface GenerateCreateAdvancedParams {
  lengthSeconds: number;

  prompt: string;

  style: 'Cinematic' | 'Explainer' | 'Documentary' | 'Abstract' | 'Minimalist';

  aspectRatio?: '16:9' | '9:16' | '1:1';

  audienceTarget?: 'general' | 'corporate' | 'investor' | 'youth' | null;

  backgroundMusicGenre?: 'corporate' | 'uplifting' | 'ambient' | 'cinematic' | 'none' | null;

  brandAssets?: Array<string> | null;

  brandColors?: Array<string> | null;

  callToAction?: GenerateCreateAdvancedParams.CallToAction | null;

  keywords?: Array<string> | null;

  voiceoverStyle?: 'male_professional' | 'female_friendly' | 'neutral_calm' | null;

  voiceoverText?: string | null;
}

export namespace GenerateCreateAdvancedParams {
  export interface CallToAction {
    displayTimeSeconds?: number;

    text?: string;

    url?: string;
  }
}

export declare namespace Generate {
  export {
    type GenerateVideo as GenerateVideo,
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateAdvancedResponse as GenerateCreateAdvancedResponse,
    type GenerateCreateParams as GenerateCreateParams,
    type GenerateCreateAdvancedParams as GenerateCreateAdvancedParams,
  };
}
