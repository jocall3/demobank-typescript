// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CashFlowAPI from './cash-flow';
import { CashFlow } from './cash-flow';

export class Treasury extends APIResource {
  cashFlow: CashFlowAPI.CashFlow = new CashFlowAPI.CashFlow(this._client);
}

Treasury.CashFlow = CashFlow;

export declare namespace Treasury {
  export { CashFlow as CashFlow };
}
