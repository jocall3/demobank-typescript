// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource compliance', () => {
  // Prism tests are disabled
  test.skip('requestAudit: only required params', async () => {
    const responsePromise = client.corporate.compliance.requestAudit({
      auditScope: 'all_transactions',
      endDate: '2024-06-30',
      startDate: '2024-01-01',
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
  test.skip('requestAudit: required and optional params', async () => {
    const response = await client.corporate.compliance.requestAudit({
      auditScope: 'all_transactions',
      endDate: '2024-06-30',
      startDate: '2024-01-01',
      entityId: 'corp_card_xyz987654',
      regulatoryFrameworks: ['AML', 'PCI-DSS'],
    });
  });
});
