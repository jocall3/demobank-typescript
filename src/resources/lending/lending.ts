// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApplicationsAPI from './applications';
import { ApplicationSubmitParams, Applications, LoanApplicationStatus } from './applications';

export class Lending extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
}

Lending.Applications = Applications;

export declare namespace Lending {
  export {
    Applications as Applications,
    type LoanApplicationStatus as LoanApplicationStatus,
    type ApplicationSubmitParams as ApplicationSubmitParams,
  };
}
