import { PromptTemplate } from 'langchain/prompts';

const prompt = PromptTemplate.fromTemplate(
  `What's the best frameworks of {language} 2023?`
);

prompt
  .format({
    language: 'NodeJS',
  })
  .then(console.log);
