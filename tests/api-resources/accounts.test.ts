// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  // Mock server tests are disabled
  test.skip('link: only required params', async () => {
    const responsePromise = client.accounts.link({ countryCode: 'US', institutionName: 'Bank of America' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('link: required and optional params', async () => {
    const response = await client.accounts.link({ countryCode: 'US', institutionName: 'Bank of America' });
  });

  // Mock server tests are disabled
  test.skip('retrieveDetails', async () => {
    const responsePromise = client.accounts.retrieveDetails('acc_chase_checking_4567');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
