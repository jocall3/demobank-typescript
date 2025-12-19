// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.lending.applications.retrieve('applicationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.lending.applications.submit({
      loanAmount: 0,
      loanPurpose: 'home_improvement',
      repaymentTermMonths: 0,
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.lending.applications.submit({
      loanAmount: 0,
      loanPurpose: 'home_improvement',
      repaymentTermMonths: 0,
      additionalNotes: 'additionalNotes',
      coApplicant: { email: 'dev@stainless.com', income: 0, name: 'name' },
    });
  });
});
