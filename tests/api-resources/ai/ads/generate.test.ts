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
      prompt:
        "A captivating ad featuring a young entrepreneur using Demo Bank's AI tools to grow their startup. Focus on innovation and ease of use.",
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
      prompt:
        "A captivating ad featuring a young entrepreneur using Demo Bank's AI tools to grow their startup. Focus on innovation and ease of use.",
      aspectRatio: '16:9',
      backgroundMusicGenre: 'none',
      brandColors: ['#0000FF', '#FFD700'],
      lengthSeconds: 15,
      style: 'Cinematic',
    });
  });

  // Prism tests are disabled
  test.skip('createAdvanced: only required params', async () => {
    const responsePromise = client.ai.ads.generate.createAdvanced({
      prompt:
        "A captivating ad featuring a young entrepreneur using Demo Bank's AI tools to grow their startup. Focus on innovation and ease of use.",
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
      prompt:
        "A captivating ad featuring a young entrepreneur using Demo Bank's AI tools to grow their startup. Focus on innovation and ease of use.",
      aspectRatio: '16:9',
      audienceTarget: 'entrepreneur',
      backgroundMusicGenre: 'none',
      brandAssets: [
        'https://demobank.com/assets/logo_hd.png',
        'https://demobank.com/assets/quantum_loop_video.mp4',
      ],
      brandColors: ['#0000FF', '#FFD700'],
      callToAction: {
        displayTimeSeconds: 5,
        text: 'Visit DemoBank.com to learn more!',
        url: 'https://demobank.com',
      },
      lengthSeconds: 15,
      style: 'Cinematic',
      visualElements: [
        {
          description: 'A seamless transition to a user interacting with the Demo Bank app interface.',
          timestampSeconds: 5.2,
        },
      ],
      voiceoverStyle: 'male_professional',
      voiceoverText: 'Demo Bank: Your future, amplified by Quantum AI.',
    });
  });
});
