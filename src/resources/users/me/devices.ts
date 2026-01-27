// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Devices extends APIResource {
  /**
   * Retrieves a list of all devices linked to the user's account, including mobile
   * phones, tablets, and desktops, indicating their last active status and security
   * posture.
   *
   * @example
   * ```ts
   * const devices = await client.users.me.devices.list();
   * ```
   */
  list(
    query: DeviceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceListResponse> {
    return this._client.get('/users/me/devices', { query, ...options });
  }
}

export interface DeviceListResponse {
  data: Array<DeviceListResponse.Data>;

  limit: number;

  offset: number;

  total: number;

  nextOffset?: number;
}

export namespace DeviceListResponse {
  export interface Data {
    id?: string;

    ipAddress?: string;

    lastActive?: string;

    model?: string;

    os?: string;

    pushToken?: string;

    trustLevel?: string;

    type?: string;
  }
}

export interface DeviceListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export declare namespace Devices {
  export { type DeviceListResponse as DeviceListResponse, type DeviceListParams as DeviceListParams };
}
