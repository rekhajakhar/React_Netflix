import OpenAI from "openai";
import { OPENAI_GROQ_KEY, OPENAI_KEY } from "./constants";

// const openai = new OpenAI({
//     apiKey: OPENAI_KEY,
//     dangerouslyAllowBrowser: true
// });

const openai = new OpenAI({
  apiKey: OPENAI_GROQ_KEY, 
  baseURL: "https://api.groq.com/openai/v1", // This is the magic line,
  dangerouslyAllowBrowser: true
});


export default openai;

