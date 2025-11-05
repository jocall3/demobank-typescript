// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnomaliesAPI from './anomalies';
import {
  Anomalies,
  AnomalyListParams,
  AnomalyListResponse,
  AnomalyUpdateStatusParams,
  FinancialAnomaly,
} from './anomalies';
import * as CardsAPI from './cards';
import {
  CardFreezeParams,
  CardIssueVirtualParams,
  CardListResponse,
  CardUpdateControlsParams,
  Cards,
  CorporateCard,
  CorporateCardControls,
} from './cards';
import * as ComplianceAPI from './compliance';
import { Compliance, ComplianceRequestAuditParams, ComplianceRequestAuditResponse } from './compliance';
import * as RiskAPI from './risk/risk';
import { Risk } from './risk/risk';
import * as TreasuryAPI from './treasury/treasury';
import { Treasury } from './treasury/treasury';

export class Corporate extends APIResource {
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  anomalies: AnomaliesAPI.Anomalies = new AnomaliesAPI.Anomalies(this._client);
  compliance: ComplianceAPI.Compliance = new ComplianceAPI.Compliance(this._client);
  treasury: TreasuryAPI.Treasury = new TreasuryAPI.Treasury(this._client);
  risk: RiskAPI.Risk = new RiskAPI.Risk(this._client);
}

Corporate.Cards = Cards;
Corporate.Anomalies = Anomalies;
Corporate.Compliance = Compliance;
Corporate.Treasury = Treasury;
Corporate.Risk = Risk;

export declare namespace Corporate {
  export {
    Cards as Cards,
    type CorporateCard as CorporateCard,
    type CorporateCardControls as CorporateCardControls,
    type CardListResponse as CardListResponse,
    type CardFreezeParams as CardFreezeParams,
    type CardIssueVirtualParams as CardIssueVirtualParams,
    type CardUpdateControlsParams as CardUpdateControlsParams,
  };

  export {
    Anomalies as Anomalies,
    type FinancialAnomaly as FinancialAnomaly,
    type AnomalyListResponse as AnomalyListResponse,
    type AnomalyListParams as AnomalyListParams,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };

  export {
    Compliance as Compliance,
    type ComplianceRequestAuditResponse as ComplianceRequestAuditResponse,
    type ComplianceRequestAuditParams as ComplianceRequestAuditParams,
  };

  export { Treasury as Treasury };

  export { Risk as Risk };
}
