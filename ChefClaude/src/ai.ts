import { HfInference } from '@huggingface/inference'
import { HF_ACCESS_TOKEN } from './hf-token'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with all of those ingredients. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Should mostly be Indian if there is no indian recipe with the given ingredients then try different cusine
`

const hf = new HfInference(HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr: string[]) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err: any) {
        console.error(err.message)
    }
}