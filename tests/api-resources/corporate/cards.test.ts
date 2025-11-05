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
  test.skip('freeze: only required params', async () => {
    const responsePromise = client.corporate.cards.freeze('corp_card_xyz987654', { freeze: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('freeze: required and optional params', async () => {
    const response = await client.corporate.cards.freeze('corp_card_xyz987654', { freeze: true });
  });

  // Prism tests are disabled
  test.skip('issueVirtual: only required params', async () => {
    const responsePromise = client.corporate.cards.issueVirtual({
      controls: {},
      holderName: 'Marketing Campaign Q3',
      purpose: 'Online advertising for Q3 product launch.',
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
        dailyLimit: 500,
        internationalTransactions: false,
        merchantCategoryRestrictions: ['Restaurants', 'Travel', 'Office Supplies'],
        monthlyLimit: 2500,
        onlineTransactions: true,
        singleTransactionLimit: 1000,
        vendorRestrictions: ['Amazon', 'Uber'],
      },
      holderName: 'Marketing Campaign Q3',
      purpose: 'Online advertising for Q3 product launch.',
      associatedEmployeeId: 'emp_marketing_01',
      expirationDate: '2025-09-30',
    });
  });

  // Prism tests are disabled
  test.skip('updateControls', async () => {
    const responsePromise = client.corporate.cards.updateControls('corp_card_xyz987654', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
