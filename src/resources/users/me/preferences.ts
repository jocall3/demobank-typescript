// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * Retrieves the user's application preferences, including UI theme, notification
   * settings, and AI interaction modes.
   */
  retrieve(options?: RequestOptions): APIPromise<UserPreferences> {
    return this._client.get('/users/me/preferences', options);
  }
}

/**
 * User configuration settings.
 */
export interface UserPreferences {
  aiInteractionMode?: 'proactive' | 'balanced' | 'on_demand';

  dataSharingConsent?: boolean;

  notificationChannels?: UserPreferences.NotificationChannels;

  preferredLanguage?: string;

  theme?: string;

  transactionGrouping?: 'category' | 'merchant' | 'date' | 'account';
}

export namespace UserPreferences {
  export interface NotificationChannels {
    email?: boolean;

    inApp?: boolean;

    push?: boolean;

    sms?: boolean;
  }
}

export declare namespace Preferences {
  export { type UserPreferences as UserPreferences };
}
