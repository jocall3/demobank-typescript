// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pitch', () => {
  // Mock server tests are disabled
  test.skip('getDetails', async () => {
    const responsePromise = client.ai.incubator.pitch.getDetails('pitch_qw_synergychain-xyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.ai.incubator.pitch.submit({
      financialProjections: {
        seedRoundAmount: 2500000,
        valuationPreMoney: 10000000,
        projectionYears: 3,
        revenueForecast: [500000, 2000000, 6000000],
        profitabilityEstimate: 'Achieve profitability within 18 months.',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.ai.incubator.pitch.submit({
      financialProjections: {
        seedRoundAmount: 2500000,
        valuationPreMoney: 10000000,
        projectionYears: 3,
        revenueForecast: [500000, 2000000, 6000000],
        profitabilityEstimate: 'Achieve profitability within 18 months.',
      },
    });
  });
});
