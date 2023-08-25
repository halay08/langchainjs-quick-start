import { OpenAI } from 'langchain/llms/openai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';
import { OPENAI_KEY } from '../config';

const llm = new OpenAI({ openAIApiKey: OPENAI_KEY });
const prompt = PromptTemplate.fromTemplate(
  "What's the best framework of {lang} 2023?"
);

const chain = new LLMChain({
  llm,
  prompt,
});

// Run is a convenience method for chains with prompts that require one input and one output.
chain.call({ lang: 'nodejs' }).then(console.log);
