// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pitch', () => {
  // Prism tests are disabled
  test.skip('getDetails', async () => {
    const responsePromise = client.ai.incubator.pitch.getDetails('pitch_qw_synergychain-xyz');
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
    const responsePromise = client.ai.incubator.pitch.submit({
      businessPlan:
        "Our venture, 'SynergyChain AI,' aims to revolutionize global supply chain transparency and efficiency using a decentralized AI ledger. We leverage quantum-inspired algorithms to predict disruptions and optimize logistics, targeting multinational corporations...",
      financialProjections: {},
      foundingTeam: [{}],
      marketOpportunity:
        'The global supply chain market faces $1.5T in annual losses due to inefficiencies and lack of real-time data. SynergyChain AI offers a 30% reduction in lead times and a 15% cut in operational costs...',
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
    const response = await client.ai.incubator.pitch.submit({
      businessPlan:
        "Our venture, 'SynergyChain AI,' aims to revolutionize global supply chain transparency and efficiency using a decentralized AI ledger. We leverage quantum-inspired algorithms to predict disruptions and optimize logistics, targeting multinational corporations...",
      financialProjections: {
        profitabilityEstimate: 'Achieve profitability within 24 months.',
        projectionYears: 3,
        revenueForecast: [1000000],
        seedRoundAmount: 5000000,
        valuationPreMoney: 20000000,
      },
      foundingTeam: [
        {
          experience: '20+ years in AI/ML, ex-Google X',
          name: 'Dr. Anya Sharma',
          role: 'CEO, Lead AI Architect',
        },
      ],
      marketOpportunity:
        'The global supply chain market faces $1.5T in annual losses due to inefficiencies and lack of real-time data. SynergyChain AI offers a 30% reduction in lead times and a 15% cut in operational costs...',
    });
  });
});
