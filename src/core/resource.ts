// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Demobank } from '../client';

export abstract class APIResource {
  protected _client: Demobank;

  constructor(client: Demobank) {
    this._client = client;
  }
}
