// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Establishes a new webhook subscription, allowing a developer application to
   * receive real-time notifications for specified events (e.g., new transaction,
   * account update) via a provided callback URL.
   *
   * @example
   * ```ts
   * const webhookSubscription =
   *   await client.developers.webhooks.create({
   *     callbackUrl:
   *       'https://my-app.com/demobank-webhook-listener',
   *     eventTypes: [
   *       'account.balance_updated',
   *       'transaction.new',
   *     ],
   *   });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookSubscription> {
    return this._client.post('/developers/webhooks', { body, ...options });
  }

  /**
   * Modifies an existing webhook subscription, allowing changes to the callback URL,
   * subscribed events, or activation status.
   *
   * @example
   * ```ts
   * const webhookSubscription =
   *   await client.developers.webhooks.update(
   *     'whsub_devtool_finance_events',
   *   );
   * ```
   */
  update(
    subscriptionID: string,
    body: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscription> {
    return this._client.put(path`/developers/webhooks/${subscriptionID}`, { body, ...options });
  }

  /**
   * Retrieves a list of all active webhook subscriptions for the authenticated
   * developer application, detailing endpoint URLs, subscribed events, and current
   * status.
   *
   * @example
   * ```ts
   * const webhookSubscriptions =
   *   await client.developers.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/developers/webhooks', options);
  }

  /**
   * Deletes an existing webhook subscription, stopping all future event
   * notifications to the specified callback URL.
   *
   * @example
   * ```ts
   * await client.developers.webhooks.delete(
   *   'whsub_devtool_finance_events',
   * );
   * ```
   */
  delete(subscriptionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/developers/webhooks/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Details of an active webhook subscription.
 */
export interface WebhookSubscription {
  /**
   * Unique identifier for the webhook subscription.
   */
  id?: string;

  /**
   * The URL where event notifications will be sent.
   */
  callbackUrl?: string;

  createdAt?: string;

  /**
   * A list of event types for which notifications will be sent.
   */
  eventTypes?: Array<string>;

  /**
   * Timestamp of the last attempted event delivery.
   */
  lastDeliveryAttempt?: string | null;

  /**
   * Indicates if the last delivery attempt was successful.
   */
  lastDeliverySuccess?: boolean | null;

  /**
   * A secret key used to sign webhook payloads, ensuring authenticity and integrity.
   * Only shown upon creation.
   */
  secret?: string;

  /**
   * Current status of the subscription.
   */
  status?: 'active' | 'paused' | 'disabled' | 'error';
}

export type WebhookListResponse = Array<WebhookSubscription>;

export interface WebhookCreateParams {
  /**
   * The URL where event notifications will be sent. Must be HTTPS.
   */
  callbackUrl: string;

  /**
   * A list of event types to subscribe to. Available types can be found in API
   * documentation.
   */
  eventTypes: Array<string>;

  /**
   * An optional description for the webhook subscription.
   */
  description?: string | null;
}

export interface WebhookUpdateParams {
  /**
   * The new URL for event notifications.
   */
  callbackUrl?: string | null;

  /**
   * The updated list of event types to subscribe to.
   */
  eventTypes?: Array<string> | null;

  /**
   * The new status for the subscription.
   */
  status?: 'active' | 'paused' | 'disabled' | null;
}

export declare namespace Webhooks {
  export {
    type WebhookSubscription as WebhookSubscription,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
