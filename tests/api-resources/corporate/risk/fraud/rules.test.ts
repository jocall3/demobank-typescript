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
      action: { details: 'details', type: 'block' },
      criteria: {},
      description: 'description',
      name: 'name',
      severity: 'low',
      status: 'active',
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
      action: { details: 'details', type: 'block', targetTeam: 'targetTeam' },
      criteria: {
        accountInactivityDays: 0,
        countryOfOrigin: ['string'],
        geographicDistanceKm: 0,
        lastLoginDays: 0,
        noTravelNotification: true,
        paymentCountMin: 0,
        recipientCountryRiskLevel: ['low'],
        recipientNew: true,
        timeframeHours: 0,
        transactionAmountMin: 0,
        transactionType: 'debit',
      },
      description: 'description',
      name: 'name',
      severity: 'low',
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.risk.fraud.rules.list(
        { after: 'after', limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demobank.NotFoundError);
  });
});
