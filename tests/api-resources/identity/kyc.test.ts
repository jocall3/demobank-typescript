// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource kyc', () => {
  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.identity.kyc.submit({
      consentGiven: true,
      documentReference: 'https://demobank-uploads.com/kyc/user_passport_scan.pdf',
      documentType: 'passport',
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
    const response = await client.identity.kyc.submit({
      consentGiven: true,
      documentReference: 'https://demobank-uploads.com/kyc/user_passport_scan.pdf',
      documentType: 'passport',
      addressProofReference: 'https://demobank-uploads.com/kyc/user_utility_bill.pdf',
      addressProofType: 'utility_bill',
      documentNumber: 'P12345678',
      expirationDate: '2030-03-09',
      issueDate: '2020-03-10',
    });
  });
});
