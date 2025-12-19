// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PitchAPI from './pitch';
import { Pitch, PitchSubmitParams, QuantumWeaverState } from './pitch';

export class Incubator extends APIResource {
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);
}

Incubator.Pitch = Pitch;

export declare namespace Incubator {
  export {
    Pitch as Pitch,
    type QuantumWeaverState as QuantumWeaverState,
    type PitchSubmitParams as PitchSubmitParams,
  };
}
