// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.list(
        {
          category: 'Groceries',
          endDate: '2024-12-31',
          limit: 1,
          maxAmount: 0,
          minAmount: 0,
          offset: 0,
          searchQuery: 'Starbucks',
          startDate: '2024-01-01',
          type: 'income',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demobank.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('categorize: only required params', async () => {
    const responsePromise = client.transactions.categorize('txn_quantum-2024-07-21-A7B8C9', {
      category: 'Business Expenses > Client Entertainment',
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
  test.skip('categorize: required and optional params', async () => {
    const response = await client.transactions.categorize('txn_quantum-2024-07-21-A7B8C9', {
      category: 'Business Expenses > Client Entertainment',
      applyToFuture: true,
      notes: 'Meeting with client for project Alpha.',
    });
  });

  // Prism tests are disabled
  test.skip('dispute: only required params', async () => {
    const responsePromise = client.transactions.dispute('txn_quantum-2024-07-21-A7B8C9', {
      reason: 'unauthorized',
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
  test.skip('dispute: required and optional params', async () => {
    const response = await client.transactions.dispute('txn_quantum-2024-07-21-A7B8C9', {
      reason: 'unauthorized',
      details: 'I did not authorize this purchase. My card may have been compromised.',
      supportingDocuments: ['https://demobank.com/uploads/proof_of_non_purchase.png'],
    });
  });
});
