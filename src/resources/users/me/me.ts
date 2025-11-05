// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DevicesAPI from './devices';
import { Device, DeviceListResponse, DeviceRegisterParams, Devices } from './devices';
import * as PreferencesAPI from './preferences';
import { PreferenceUpdateParams, Preferences, UserPreferences } from './preferences';
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

/**
 * The comprehensive user profile, incorporating personal details, security status,
 * financial summaries, and loyalty program standing.
 */
export interface MeRetrieveResponse {
  /**
   * Unique identifier for the user across the Demo Bank ecosystem.
   */
  id?: string;

  /**
   * Physical address of the user.
   */
  address?: MeRetrieveResponse.Address;

  /**
   * AI-identified financial persona, used by Quantum for tailored advice.
   */
  aiPersona?: string;

  /**
   * User's date of birth, for age verification and personalization.
   */
  dateOfBirth?: string;

  /**
   * Primary email address, used for communications and login.
   */
  email?: string;

  /**
   * Current gamification level, reflecting engagement and achievements.
   */
  gamificationLevel?: number;

  /**
   * True if KYC/identity verification is complete.
   */
  identityVerified?: boolean;

  /**
   * Accumulated loyalty points, redeemable for various rewards.
   */
  loyaltyPoints?: number;

  /**
   * Current loyalty program tier, influencing benefits and rewards.
   */
  loyaltyTier?: string;

  /**
   * Full name of the user.
   */
  name?: string;

  /**
   * Primary phone number, used for MFA and notifications.
   */
  phone?: string | null;

  /**
   * Comprehensive settings for user experience, AI interaction, and notification
   * management.
   */
  preferences?: PreferencesAPI.UserPreferences;

  /**
   * Summary of user's security posture.
   */
  securityStatus?: MeRetrieveResponse.SecurityStatus;
}

export namespace MeRetrieveResponse {
  /**
   * Physical address of the user.
   */
  export interface Address {
    city?: string;

    country?: string;

    state?: string;

    street?: string;

    zip?: string;
  }

  /**
   * Summary of user's security posture.
   */
  export interface SecurityStatus {
    /**
     * Indicates if biometric authentication is set up.
     */
    biometricsEnrolled?: boolean;

    /**
     * Timestamp of the last successful login.
     */
    lastLogin?: string;

    /**
     * IP address of the last successful login.
     */
    lastLoginIp?: string;

    /**
     * Indicates if 2FA is enabled.
     */
    twoFactorEnabled?: boolean;
  }
}

Me.Preferences = Preferences;
Me.Devices = Devices;

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };

  export {
    Preferences as Preferences,
    type UserPreferences as UserPreferences,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };

  export {
    Devices as Devices,
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceRegisterParams as DeviceRegisterParams,
  };
}
