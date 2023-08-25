import { OpenAI } from 'langchain/llms/openai';
import { OPENAI_KEY } from '../config';

const llm = new OpenAI({
  openAIApiKey: OPENAI_KEY,
  temperature: 0.9,
});

llm
  .predict(
    'What would be a good company name for a company that makes colorful socks?'
  )
  .then(console.log);
// "Feetful of Fun"
