// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * Retrieves the user's deep personalization preferences, including AI
   * customization settings, notification channel priorities, thematic choices, and
   * data sharing consents.
   *
   * @example
   * ```ts
   * const userPreferences =
   *   await client.users.me.preferences.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<UserPreferences> {
    return this._client.get('/users/me/preferences', options);
  }

  /**
   * Updates the user's deep personalization preferences, allowing dynamic control
   * over AI behavior, notification delivery, thematic choices, and data privacy
   * settings.
   *
   * @example
   * ```ts
   * const userPreferences =
   *   await client.users.me.preferences.update();
   * ```
   */
  update(body: PreferenceUpdateParams, options?: RequestOptions): APIPromise<UserPreferences> {
    return this._client.put('/users/me/preferences', { body, ...options });
  }
}

/**
 * Comprehensive settings for user experience, AI interaction, and notification
 * management.
 */
export interface UserPreferences {
  /**
   * How Quantum AI should interact: 'proactive' (frequent suggestions), 'reactive'
   * (responds only when asked), 'balanced'.
   */
  aiInteractionMode?: 'proactive' | 'reactive' | 'balanced';

  /**
   * User consent for sharing anonymized data to improve AI models.
   */
  dataSharingConsent?: boolean;

  /**
   * Preferred notification channels and their activation status.
   */
  notificationChannels?: UserPreferences.NotificationChannels;

  /**
   * User's preferred interface language.
   */
  preferredLanguage?: string;

  /**
   * Chosen visual theme for the application.
   */
  theme?: string;

  /**
   * Default grouping preference for transaction lists.
   */
  transactionGrouping?: 'merchant' | 'category' | 'date';
}

export namespace UserPreferences {
  /**
   * Preferred notification channels and their activation status.
   */
  export interface NotificationChannels {
    email?: boolean;

    inApp?: boolean;

    push?: boolean;

    sms?: boolean;
  }
}

export interface PreferenceUpdateParams {
  /**
   * How Quantum AI should interact: 'proactive' (frequent suggestions), 'reactive'
   * (responds only when asked), 'balanced'.
   */
  aiInteractionMode?: 'proactive' | 'reactive' | 'balanced';

  /**
   * User consent for sharing anonymized data to improve AI models.
   */
  dataSharingConsent?: boolean;

  /**
   * Preferred notification channels and their activation status.
   */
  notificationChannels?: PreferenceUpdateParams.NotificationChannels;

  /**
   * User's preferred interface language.
   */
  preferredLanguage?: string;

  /**
   * Chosen visual theme for the application.
   */
  theme?: string;

  /**
   * Default grouping preference for transaction lists.
   */
  transactionGrouping?: 'merchant' | 'category' | 'date';
}

export namespace PreferenceUpdateParams {
  /**
   * Preferred notification channels and their activation status.
   */
  export interface NotificationChannels {
    email?: boolean;

    inApp?: boolean;

    push?: boolean;

    sms?: boolean;
  }
}

export declare namespace Preferences {
  export { type UserPreferences as UserPreferences, type PreferenceUpdateParams as PreferenceUpdateParams };
}
