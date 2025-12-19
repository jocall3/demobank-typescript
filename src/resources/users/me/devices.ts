// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Devices extends APIResource {
  /**
   * Returns a paginated list of devices currently authorized to access the user's
   * account.
   */
  list(
    query: DeviceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceListResponse> {
    return this._client.get('/users/me/devices', { query, ...options });
  }

  /**
   * Removes a device from the user's account, revoking its access tokens.
   */
  deregister(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/me/devices/${deviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Registers a new device for the user, enabling push notifications and trusted
   * access.
   */
  register(body: DeviceRegisterParams, options?: RequestOptions): APIPromise<Device> {
    return this._client.post('/users/me/devices', { body, ...options });
  }
}

/**
 * Represents a connected device.
 */
export interface Device {
  id: string;

  ipAddress: string;

  lastActive: string;

  model: string;

  os: string;

  trustLevel: 'trusted' | 'pending_verification' | 'untrusted' | 'blocked';

  type: 'mobile' | 'desktop' | 'tablet' | 'smart_watch';

  deviceName?: string | null;

  pushToken?: string | null;
}

export interface DeviceListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<Device>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

export interface DeviceListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export interface DeviceRegisterParams {
  deviceType: 'mobile' | 'desktop' | 'tablet' | 'smart_watch';

  model: string;

  os: string;

  biometricSignature?: string | null;

  deviceName?: string | null;

  pushToken?: string | null;
}

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
    type DeviceRegisterParams as DeviceRegisterParams,
  };
}
