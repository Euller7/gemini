const { GoogleGenerativeAI } = require("@google/generative-ai");

const chaveAPI = new GoogleGenerativeAI("AIzaSyBjwJ7Bq1kaR2X8O9MPMLpK9q_RUaQcRwA");
const model = chaveAPI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "vasco 3x0 galo";

async function generateText(){
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

generateText()