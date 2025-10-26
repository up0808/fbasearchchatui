import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createLanguageModel } from 'ai';

// Initialize Google Gemini provider with your custom API key
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

// Map your custom chat models to Gemini models
const modelMap = {
  'chat-model': google('gemini-2.5-flash'),
  'chat-model-reasoning': google('gemini-2.5-pro'),
};

// This function integrates with the rest of your system
export const myProvider = {
  languageModel: (modelId: string) => {
    const model = modelMap[modelId];
    if (!model) throw new Error(`Unknown model id: ${modelId}`);
    return createLanguageModel({
      model,
      modelId,
    });
  },
};