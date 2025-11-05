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
   * const generate = await client.ai.ads.generate.create({
   *   prompt:
   *     "A captivating ad featuring a young entrepreneur using Demo Bank's AI tools to grow their startup. Focus on innovation and ease of use.",
   * });
   * ```
   */
  create(body: GenerateCreateParams, options?: RequestOptions): APIPromise<GenerateCreateResponse> {
    return this._client.post('/ai/ads/generate', { body, ...options });
  }

  /**
   * Submits a highly customized request to generate a video ad, allowing
   * fine-grained control over artistic style, aspect ratio, voiceover, background
   * music, target audience, and call-to-action elements for professional-grade
   * productions.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.ads.generate.createAdvanced({
   *     prompt:
   *       "A captivating ad featuring a young entrepreneur using Demo Bank's AI tools to grow their startup. Focus on innovation and ease of use.",
   *   });
   * ```
   */
  createAdvanced(
    body: GenerateCreateAdvancedParams,
    options?: RequestOptions,
  ): APIPromise<GenerateCreateAdvancedResponse> {
    return this._client.post('/ai/ads/generate/advanced', { body, ...options });
  }
}

/**
 * Request to generate a standard video ad using Veo 2.0.
 */
export interface GenerateVideo {
  /**
   * The text prompt describing the desired video content.
   */
  prompt: string;

  /**
   * Desired aspect ratio of the video (e.g., for YouTube, Instagram Story, or Square
   * feeds).
   */
  aspectRatio?: '16:9' | '9:16' | '1:1';

  /**
   * Optional: Genre of background music to accompany the video.
   */
  backgroundMusicGenre?: 'none' | 'cinematic' | 'upbeat' | 'ambient' | 'electronic' | 'classical';

  /**
   * Optional: Hex codes for brand colors to incorporate into the visual theme.
   */
  brandColors?: Array<string> | null;

  /**
   * Desired length of the video in seconds.
   */
  lengthSeconds?: number;

  /**
   * The artistic style for the video generation.
   */
  style?: 'Cinematic' | 'Vibrant' | 'Monochrome' | 'Surreal' | 'Abstract' | 'Minimalist';
}

export interface GenerateCreateResponse {
  /**
   * Estimated time until video generation is complete.
   */
  estimatedCompletionTimeSeconds?: number;

  operationId?: string;
}

export interface GenerateCreateAdvancedResponse {
  /**
   * Estimated time until advanced video generation is complete. May be longer than
   * standard generation.
   */
  estimatedCompletionTimeSeconds?: number;

  operationId?: string;
}

export interface GenerateCreateParams {
  /**
   * The text prompt describing the desired video content.
   */
  prompt: string;

  /**
   * Desired aspect ratio of the video (e.g., for YouTube, Instagram Story, or Square
   * feeds).
   */
  aspectRatio?: '16:9' | '9:16' | '1:1';

  /**
   * Optional: Genre of background music to accompany the video.
   */
  backgroundMusicGenre?: 'none' | 'cinematic' | 'upbeat' | 'ambient' | 'electronic' | 'classical';

  /**
   * Optional: Hex codes for brand colors to incorporate into the visual theme.
   */
  brandColors?: Array<string> | null;

  /**
   * Desired length of the video in seconds.
   */
  lengthSeconds?: number;

  /**
   * The artistic style for the video generation.
   */
  style?: 'Cinematic' | 'Vibrant' | 'Monochrome' | 'Surreal' | 'Abstract' | 'Minimalist';
}

export interface GenerateCreateAdvancedParams {
  /**
   * The text prompt describing the desired video content.
   */
  prompt: string;

  /**
   * Desired aspect ratio of the video (e.g., for YouTube, Instagram Story, or Square
   * feeds).
   */
  aspectRatio?: '16:9' | '9:16' | '1:1';

  /**
   * Specify the target audience to influence AI's narrative and visual choices.
   */
  audienceTarget?: 'general' | 'young_adult' | 'entrepreneur' | 'corporate' | 'investor' | null;

  /**
   * Optional: Genre of background music to accompany the video.
   */
  backgroundMusicGenre?: 'none' | 'cinematic' | 'upbeat' | 'ambient' | 'electronic' | 'classical';

  /**
   * URLs to brand logos, specific imagery, or video clips to be incorporated into
   * the ad. (Requires prior asset upload).
   */
  brandAssets?: Array<string> | null;

  /**
   * Optional: Hex codes for brand colors to incorporate into the visual theme.
   */
  brandColors?: Array<string> | null;

  /**
   * Details for an explicit call-to-action to be included in the video.
   */
  callToAction?: GenerateCreateAdvancedParams.CallToAction | null;

  /**
   * Desired length of the video in seconds.
   */
  lengthSeconds?: number;

  /**
   * The artistic style for the video generation.
   */
  style?: 'Cinematic' | 'Vibrant' | 'Monochrome' | 'Surreal' | 'Abstract' | 'Minimalist';

  /**
   * Optional: Specific visual cues or scenes to prioritize at certain timestamps.
   */
  visualElements?: Array<GenerateCreateAdvancedParams.VisualElement> | null;

  /**
   * The style of the AI-generated voiceover.
   */
  voiceoverStyle?:
    | 'male_professional'
    | 'female_professional'
    | 'male_friendly'
    | 'female_friendly'
    | 'neutral_optimistic';

  /**
   * Optional: Text to be used for an AI-generated voiceover. If provided, overrides
   * default narration.
   */
  voiceoverText?: string | null;
}

export namespace GenerateCreateAdvancedParams {
  /**
   * Details for an explicit call-to-action to be included in the video.
   */
  export interface CallToAction {
    displayTimeSeconds?: number;

    text?: string;

    url?: string;
  }

  export interface VisualElement {
    description?: string;

    timestampSeconds?: number;
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
