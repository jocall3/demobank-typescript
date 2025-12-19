// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource anomalies', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.corporate.anomalies.list();
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
      client.corporate.anomalies.list(
        {
          after: 'after',
          endDate: '2019-12-27',
          entityType: 'payment_order',
          limit: 1,
          severity: 'low',
          startDate: '2019-12-27',
          status: 'new',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demobank.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.corporate.anomalies.updateStatus('anomalyId', { status: 'dismissed' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.corporate.anomalies.updateStatus('anomalyId', {
      status: 'dismissed',
      resolutionNotes: 'resolutionNotes',
    });
  });
});
