// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wallets', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.web3.wallets.list();
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
      client.web3.wallets.list({ after: 'after', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demobank.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('connect: only required params', async () => {
    const responsePromise = client.web3.wallets.connect({
      blockchainNetwork: 'blockchainNetwork',
      signedMessage: 'signedMessage',
      walletAddress: 'walletAddress',
      walletProvider: 'walletProvider',
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
  test.skip('connect: required and optional params', async () => {
    const response = await client.web3.wallets.connect({
      blockchainNetwork: 'blockchainNetwork',
      signedMessage: 'signedMessage',
      walletAddress: 'walletAddress',
      walletProvider: 'walletProvider',
      requestWriteAccess: true,
    });
  });
});
