import dotenv from "dotenv";
dotenv.config();
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage , AIMessage, SystemMessage } from "langchain";
import readline from "readline/promises"


const model = new ChatMistralAI({
    model : "mistral-small-latest"
})

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const messages = [
    new SystemMessage("you are a pirate"), 
]


while(true){
    const userInput = await rl.question("User : ")
    messages.push(new HumanMessage(userInput))
    const response = await model.invoke(messages);
    messages.push(response)
    console.log(messages[messages.length -1].content)
}
