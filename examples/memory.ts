import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { OPENAI_KEY } from '../config';

class ChatChain {
  private chain: ConversationChain;
  private static instance: ChatChain;

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): ChatChain {
    if (!ChatChain.instance) {
      ChatChain.instance = new ChatChain();
    }

    return ChatChain.instance;
  }

  private constructor() {
    const model = new OpenAI({ openAIApiKey: OPENAI_KEY, temperature: 0.9 });
    const memory = new BufferMemory();
    this.chain = new ConversationChain({
      llm: model,
      memory,
      verbose: false,
    });
  }

  chat(message: string) {
    return this.chain.call({ input: message });
  }
}

const chain = ChatChain.getInstance();

(async () => {
  await chain.chat("Hi! I'm Ken. My phone number is 123-456-789");
  chain.chat("What's Ken's phone number?").then(console.log);
})();
