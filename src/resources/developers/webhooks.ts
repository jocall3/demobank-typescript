// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Registers a new webhook subscription.
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookSubscription> {
    return this._client.post('/developers/webhooks', { body, ...options });
  }

  /**
   * Updates an existing webhook subscription.
   */
  update(
    subscriptionID: string,
    body: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscription> {
    return this._client.put(path`/developers/webhooks/${subscriptionID}`, { body, ...options });
  }

  /**
   * Lists registered webhooks.
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/developers/webhooks', { query, ...options });
  }

  /**
   * Deletes a webhook subscription.
   */
  delete(subscriptionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/developers/webhooks/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Webhook subscription details.
 */
export interface WebhookSubscription {
  id: string;

  callbackUrl: string;

  createdAt: string;

  events: Array<string>;

  status: 'active' | 'paused' | 'suspended';

  failureCount?: number;

  lastTriggered?: string | null;

  secret?: string | null;
}

export interface WebhookListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<WebhookSubscription>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export interface WebhookCreateParams {
  callbackUrl: string;

  events: Array<string>;

  secret?: string | null;
}

export interface WebhookUpdateParams {
  callbackUrl?: string;

  events?: Array<string>;

  status?: 'active' | 'paused' | 'suspended';
}

export interface WebhookListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export declare namespace Webhooks {
  export {
    type WebhookSubscription as WebhookSubscription,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
