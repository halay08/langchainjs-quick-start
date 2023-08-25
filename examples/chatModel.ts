import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage } from 'langchain/schema';
import { OPENAI_KEY } from '../config';

const chat = new ChatOpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_KEY,
});

chat
  .predictMessages([
    new HumanMessage(
      'Translate this sentence from English to French. I love programming.'
    ),
  ])
  .then(console.log);
