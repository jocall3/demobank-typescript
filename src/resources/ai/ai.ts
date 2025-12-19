// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvisorAPI from './advisor';
import {
  AIInsight,
  Advisor,
  AdvisorListToolsParams,
  AdvisorListToolsResponse,
  AdvisorSendMessageParams,
  AdvisorSendMessageResponse,
} from './advisor';
import * as AdsAPI from './ads/ads';
import { AdGetGenerationStatusResponse, Ads } from './ads/ads';
import * as IncubatorAPI from './incubator/incubator';
import { Incubator } from './incubator/incubator';
import * as OracleAPI from './oracle/oracle';
import { Oracle } from './oracle/oracle';

export class AI extends APIResource {
  advisor: AdvisorAPI.Advisor = new AdvisorAPI.Advisor(this._client);
  oracle: OracleAPI.Oracle = new OracleAPI.Oracle(this._client);
  incubator: IncubatorAPI.Incubator = new IncubatorAPI.Incubator(this._client);
  ads: AdsAPI.Ads = new AdsAPI.Ads(this._client);
}

AI.Advisor = Advisor;
AI.Oracle = Oracle;
AI.Incubator = Incubator;
AI.Ads = Ads;

export declare namespace AI {
  export {
    Advisor as Advisor,
    type AIInsight as AIInsight,
    type AdvisorListToolsResponse as AdvisorListToolsResponse,
    type AdvisorSendMessageResponse as AdvisorSendMessageResponse,
    type AdvisorListToolsParams as AdvisorListToolsParams,
    type AdvisorSendMessageParams as AdvisorSendMessageParams,
  };

  export { Oracle as Oracle };

  export { Incubator as Incubator };

  export { Ads as Ads, type AdGetGenerationStatusResponse as AdGetGenerationStatusResponse };
}
