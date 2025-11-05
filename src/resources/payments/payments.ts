// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FxAPI from './fx';
import { Fx, FxGetRatesParams, FxGetRatesResponse } from './fx';
import * as InternationalAPI from './international';
import { International, InternationalInitiateParams, InternationalInitiateResponse } from './international';

export class Payments extends APIResource {
  international: InternationalAPI.International = new InternationalAPI.International(this._client);
  fx: FxAPI.Fx = new FxAPI.Fx(this._client);
}

Payments.International = International;
Payments.Fx = Fx;

export declare namespace Payments {
  export {
    International as International,
    type InternationalInitiateResponse as InternationalInitiateResponse,
    type InternationalInitiateParams as InternationalInitiateParams,
  };

  export {
    Fx as Fx,
    type FxGetRatesResponse as FxGetRatesResponse,
    type FxGetRatesParams as FxGetRatesParams,
  };
}
