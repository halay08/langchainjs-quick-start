import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';
import { OPENAI_KEY, SERP_API_KEY } from '../config';

async function execute() {
  const model = new OpenAI({ openAIApiKey: OPENAI_KEY, temperature: 0.9 });
  const tools = [
    new SerpAPI(SERP_API_KEY, {
      location: 'Austin,Texas,United States',
      hl: 'en',
      gl: 'us',
    }),
    new Calculator(),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: 'zero-shot-react-description',
    verbose: true,
  });

  const input =
    'What is the best freelancer platform of software development 2023?';

  return executor.call({
    input,
  });
}

execute().then(console.log);
