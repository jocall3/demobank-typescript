// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource transactions', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transactions.retrieve('txn_quantum-2024-07-21-A7B8C9');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.transactions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.list(
        {
          category: 'category',
          endDate: 'endDate',
          limit: 0,
          maxAmount: 0,
          minAmount: 0,
          offset: 0,
          searchQuery: 'searchQuery',
          startDate: 'startDate',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demobank.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('categorize: only required params', async () => {
    const responsePromise = client.transactions.categorize('txn_quantum-2024-07-21-A7B8C9', {
      category: 'Home > Groceries',
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
  test.skip('categorize: required and optional params', async () => {
    const response = await client.transactions.categorize('txn_quantum-2024-07-21-A7B8C9', {
      category: 'Home > Groceries',
      applyToFuture: true,
      notes: 'Bulk purchase for party',
    });
  });
});
