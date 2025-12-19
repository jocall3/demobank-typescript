// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DevicesAPI from './devices';
import { Device, DeviceListParams, DeviceListResponse, DeviceRegisterParams, Devices } from './devices';
import * as PreferencesAPI from './preferences';
import { Preferences, UserPreferences } from './preferences';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);

  /**
   * Fetches the full profile of the currently authenticated user, including identity
   * verification status and loyalty details.
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }
}

/**
 * Represents a registered user.
 */
export interface MeRetrieveResponse {
  /**
   * Unique user ID.
   */
  id: string;

  /**
   * Email address.
   */
  email: string;

  identityVerified: boolean;

  /**
   * Full name.
   */
  name: string;

  /**
   * Physical address structure.
   */
  address?: MeRetrieveResponse.Address;

  aiPersona?: string;

  dateOfBirth?: string | null;

  gamificationLevel?: number;

  loyaltyPoints?: number;

  loyaltyTier?: string;

  phone?: string | null;

  /**
   * User configuration settings.
   */
  preferences?: PreferencesAPI.UserPreferences;

  /**
   * Security state of the user account.
   */
  securityStatus?: MeRetrieveResponse.SecurityStatus;
}

export namespace MeRetrieveResponse {
  /**
   * Physical address structure.
   */
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  /**
   * Security state of the user account.
   */
  export interface SecurityStatus {
    biometricsEnrolled?: boolean;

    lastLogin?: string;

    lastLoginIp?: string;

    twoFactorEnabled?: boolean;
  }
}

Me.Preferences = Preferences;
Me.Devices = Devices;

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };

  export { Preferences as Preferences, type UserPreferences as UserPreferences };

  export {
    Devices as Devices,
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
    type DeviceRegisterParams as DeviceRegisterParams,
  };
}
