// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource simulate', () => {
  // Prism tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.run({ prompt: 'prompt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.run({ prompt: 'prompt', parameters: {} });
  });

  // Prism tests are disabled
  test.skip('runAdvanced: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.runAdvanced({
      prompt: 'prompt',
      scenarios: [{ durationYears: 0, events: [{}], name: 'name' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('runAdvanced: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.runAdvanced({
      prompt: 'prompt',
      scenarios: [
        {
          durationYears: 0,
          events: [{ details: {}, type: 'job_loss' }],
          name: 'name',
          sensitivityAnalysisParams: [{ max: 0, min: 0, paramName: 'paramName', step: 0 }],
        },
      ],
      globalEconomicFactors: { inflationRate: 0, interestRateBaseline: 0 },
      personalAssumptions: { annualSavingsRate: 0, riskTolerance: 'conservative' },
    });
  });
});
