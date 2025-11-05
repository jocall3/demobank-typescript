// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.corporate.risk.fraud.rules.create({
      actions: [{}],
      description:
        'Flags multiple small transactions (under $50) to different merchants within a very short timeframe (e.g., 5 transactions in 10 minutes), indicative of card testing.',
      name: 'High Velocity Small Transactions',
      severity: 'High',
      triggers: [{}],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.corporate.risk.fraud.rules.create({
      actions: [{ details: 'Flagged for immediate review by fraud analyst.', type: 'flag_for_review' }],
      description:
        'Flags multiple small transactions (under $50) to different merchants within a very short timeframe (e.g., 5 transactions in 10 minutes), indicative of card testing.',
      name: 'High Velocity Small Transactions',
      severity: 'High',
      triggers: [
        {
          additionalConditions: [{ metric: 'transaction_amount', operator: 'lt', value: '50' }],
          metric: 'transaction_count_24h',
          operator: 'gte',
          timeWindowSeconds: 600,
          value: '5',
        },
      ],
      status: 'active',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.corporate.risk.fraud.rules.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
