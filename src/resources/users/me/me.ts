// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DevicesAPI from './devices';
import { DeviceListParams, DeviceListResponse, Devices } from './devices';
import * as PreferencesAPI from './preferences';
import {
  PreferenceRetrieveResponse,
  PreferenceUpdateParams,
  PreferenceUpdateResponse,
  Preferences as PreferencesAPIPreferences,
} from './preferences';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);

  /**
   * Fetches the complete and dynamically updated profile information for the
   * currently authenticated user, encompassing personal details, security status,
   * gamification level, loyalty points, and linked identity attributes.
   *
   * @example
   * ```ts
   * const me = await client.users.me.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }
}

export interface MeRetrieveResponse {
  id: string;

  email: string;

  identityVerified: boolean;

  name: string;

  address?: MeRetrieveResponse.Address;

  aiPersona?: string;

  dateOfBirth?: string;

  gamificationLevel?: number;

  loyaltyPoints?: number;

  loyaltyTier?: string;

  phone?: string;

  /**
   * User's personalized preferences for the platform.
   */
  preferences?: MeRetrieveResponse.Preferences;

  /**
   * Security-related status for the user account.
   */
  securityStatus?: MeRetrieveResponse.SecurityStatus;
}

export namespace MeRetrieveResponse {
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  /**
   * User's personalized preferences for the platform.
   */
  export interface Preferences {
    aiInteractionMode?: string;

    dataSharingConsent?: boolean;

    /**
     * Preferred channels for receiving notifications.
     */
    notificationChannels?: Preferences.NotificationChannels;

    preferredLanguage?: string;

    theme?: string;

    transactionGrouping?: string;
  }

  export namespace Preferences {
    /**
     * Preferred channels for receiving notifications.
     */
    export interface NotificationChannels {
      email?: boolean;

      inApp?: boolean;

      push?: boolean;

      sms?: boolean;
    }
  }

  /**
   * Security-related status for the user account.
   */
  export interface SecurityStatus {
    biometricsEnrolled?: boolean;

    lastLogin?: string;

    lastLoginIp?: string;

    twoFactorEnabled?: boolean;
  }
}

Me.Preferences = PreferencesAPIPreferences;
Me.Devices = Devices;

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };

  export {
    PreferencesAPIPreferences as Preferences,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };

  export {
    Devices as Devices,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
  };
}
