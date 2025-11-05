// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import {
  WebhookCreateParams,
  WebhookListResponse,
  WebhookSubscription,
  WebhookUpdateParams,
  Webhooks,
} from './webhooks';

export class Developers extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Developers.Webhooks = Webhooks;

export declare namespace Developers {
  export {
    Webhooks as Webhooks,
    type WebhookSubscription as WebhookSubscription,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
