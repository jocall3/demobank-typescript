// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SimulateAPI from './simulate';
import {
  Simulate,
  SimulateRunAdvancedParams,
  SimulateRunAdvancedResponse,
  SimulateRunParams,
  SimulateRunResponse,
} from './simulate';

export class Oracle extends APIResource {
  simulate: SimulateAPI.Simulate = new SimulateAPI.Simulate(this._client);
}

Oracle.Simulate = Simulate;

export declare namespace Oracle {
  export {
    Simulate as Simulate,
    type SimulateRunResponse as SimulateRunResponse,
    type SimulateRunAdvancedResponse as SimulateRunAdvancedResponse,
    type SimulateRunParams as SimulateRunParams,
    type SimulateRunAdvancedParams as SimulateRunAdvancedParams,
  };
}
