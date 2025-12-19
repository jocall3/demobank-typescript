// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fx', () => {
  // Prism tests are disabled
  test.skip('getRates: only required params', async () => {
    const responsePromise = client.payments.fx.getRates({ baseCurrency: 'SEW', targetCurrency: 'SEW' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRates: required and optional params', async () => {
    const response = await client.payments.fx.getRates({
      baseCurrency: 'SEW',
      targetCurrency: 'SEW',
      forecastDays: 1,
    });
  });
});
