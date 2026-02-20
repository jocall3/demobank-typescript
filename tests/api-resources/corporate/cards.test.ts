// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource cards', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.cards.list({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demobank.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('freeze', async () => {
    const responsePromise = client.corporate.cards.freeze('corp_card_xyz987654', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('issueVirtual: only required params', async () => {
    const responsePromise = client.corporate.cards.issueVirtual({
      controls: {
        atmWithdrawals: false,
        contactlessPayments: false,
        onlineTransactions: true,
        internationalTransactions: false,
        monthlyLimit: 1000,
        dailyLimit: 500,
        singleTransactionLimit: 200,
        merchantCategoryRestrictions: ['Advertising'],
        vendorRestrictions: ['Facebook Ads', 'Google Ads'],
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
  test.skip('issueVirtual: required and optional params', async () => {
    const response = await client.corporate.cards.issueVirtual({
      controls: {
        atmWithdrawals: false,
        contactlessPayments: false,
        onlineTransactions: true,
        internationalTransactions: false,
        monthlyLimit: 1000,
        dailyLimit: 500,
        singleTransactionLimit: 200,
        merchantCategoryRestrictions: ['Advertising'],
        vendorRestrictions: ['Facebook Ads', 'Google Ads'],
      },
    });
  });

  // Mock server tests are disabled
  test.skip('updateControls', async () => {
    const responsePromise = client.corporate.cards.updateControls('corp_card_xyz987654');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateControls: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.cards.updateControls('corp_card_xyz987654', {}, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demobank.NotFoundError);
  });
});
