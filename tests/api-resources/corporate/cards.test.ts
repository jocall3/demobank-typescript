// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cards', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.corporate.cards.list();
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
      client.corporate.cards.list({ after: 'after', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demobank.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('issueVirtual: only required params', async () => {
    const responsePromise = client.corporate.cards.issueVirtual({
      controls: {},
      expirationDate: '2019-12-27',
      holderName: 'holderName',
      purpose: 'purpose',
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
  test.skip('issueVirtual: required and optional params', async () => {
    const response = await client.corporate.cards.issueVirtual({
      controls: {
        atmWithdrawals: true,
        contactlessPayments: true,
        dailyLimit: 0,
        internationalTransactions: true,
        merchantCategoryRestrictions: ['string'],
        monthlyLimit: 0,
        onlineTransactions: true,
        singleTransactionLimit: 0,
        vendorRestrictions: ['string'],
      },
      expirationDate: '2019-12-27',
      holderName: 'holderName',
      purpose: 'purpose',
      associatedEmployeeId: 'associatedEmployeeId',
      spendingPolicyId: 'spendingPolicyId',
    });
  });
});
