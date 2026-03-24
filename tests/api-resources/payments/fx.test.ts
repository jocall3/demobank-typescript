// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource fx', () => {
  // Mock server tests are disabled
  test.skip('getRates', async () => {
    const responsePromise = client.payments.fx.getRates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRates: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.fx.getRates(
        {
          baseCurrency: 'baseCurrency',
          forecastDays: 0,
          targetCurrency: 'targetCurrency',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demobank.NotFoundError);
  });
});
