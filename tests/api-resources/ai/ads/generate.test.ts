// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demobank from 'demobank';

const client = new Demobank({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generate', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.ads.generate.create({
      lengthSeconds: 0,
      prompt: 'prompt',
      style: 'Cinematic',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.ads.generate.create({
      lengthSeconds: 0,
      prompt: 'prompt',
      style: 'Cinematic',
      aspectRatio: '16:9',
      brandColors: ['#Afd'],
      keywords: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('createAdvanced: only required params', async () => {
    const responsePromise = client.ai.ads.generate.createAdvanced({
      lengthSeconds: 0,
      prompt: 'prompt',
      style: 'Cinematic',
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
  test.skip('createAdvanced: required and optional params', async () => {
    const response = await client.ai.ads.generate.createAdvanced({
      lengthSeconds: 0,
      prompt: 'prompt',
      style: 'Cinematic',
      aspectRatio: '16:9',
      audienceTarget: 'general',
      backgroundMusicGenre: 'corporate',
      brandAssets: ['https://example.com'],
      brandColors: ['#Afd'],
      callToAction: { displayTimeSeconds: 0, text: 'text', url: 'https://example.com' },
      keywords: ['string'],
      voiceoverStyle: 'male_professional',
      voiceoverText: 'voiceoverText',
    });
  });
});
