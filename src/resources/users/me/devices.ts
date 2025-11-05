// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  list(options?: RequestOptions): APIPromise<DeviceListResponse> {
    return this._client.get('/users/me/devices', options);
  }

  /**
   * Removes a specific device from the user's linked devices, revoking its access
   * and requiring re-registration for future use. Useful for lost or compromised
   * devices.
   *
   * @example
   * ```ts
   * await client.users.me.devices.deregister(
   *   'dev_mobile_ios_aabbcc',
   * );
   * ```
   */
  deregister(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/me/devices/${deviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Registers a new device for secure access and multi-factor authentication,
   * associating it with the user's profile. This typically initiates a biometric or
   * MFA enrollment flow.
   *
   * @example
   * ```ts
   * const device = await client.users.me.devices.register({
   *   biometricSignature:
   *     'base64encoded_biometric_proof_string',
   *   deviceType: 'mobile',
   *   model: 'Samsung Galaxy S24 Ultra',
   *   os: 'Android 14',
   * });
   * ```
   */
  register(body: DeviceRegisterParams, options?: RequestOptions): APIPromise<Device> {
    return this._client.post('/users/me/devices', { body, ...options });
  }
}

/**
 * Details of a device registered to the user's account for access and security.
 */
export interface Device {
  /**
   * Unique identifier for the registered device.
   */
  id?: string;

  /**
   * Last known IP address associated with the device.
   */
  ipAddress?: string;

  /**
   * Timestamp of the last recorded activity from this device.
   */
  lastActive?: string;

  /**
   * Device model.
   */
  model?: string;

  /**
   * Operating system and version of the device.
   */
  os?: string;

  /**
   * Push notification token for the device, if registered.
   */
  pushToken?: string | null;

  /**
   * Security trust level of the device. Untrusted devices may require additional
   * MFA.
   */
  trustLevel?: 'trusted' | 'untrusted' | 'pending_verification';

  /**
   * Type of device.
   */
  type?: 'mobile' | 'tablet' | 'desktop' | 'wearable';
}

export type DeviceListResponse = Array<Device>;

export interface DeviceRegisterParams {
  /**
   * A cryptographic signature derived from a local biometric scan (e.g., face or
   * fingerprint) on the new device, used for initial trust establishment.
   */
  biometricSignature: string;

  deviceType: 'mobile' | 'tablet' | 'desktop' | 'wearable';

  model: string;

  os: string;

  /**
   * Optional, user-friendly name for the device.
   */
  deviceName?: string | null;
}

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceRegisterParams as DeviceRegisterParams,
  };
}
