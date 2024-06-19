const Groq = require('groq-sdk')

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

const getGroqChatCompletion = async (userResponse) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a nutrition expert. Respond only with a JSON object without any additional text and make sure you include the last bracket. Here is the format you should use: {"planName": "", "planDescription": [{"index": 1, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}, {"index": 2, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}, {"index": 3, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}, {"index": 4, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}, {"index": 5, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}, {"index": 6, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}, {"index": 7, "breakfast": "", "snack": "", "lunch": "", "dinner": ""}], "calories": 0, "category": "",} make sure you include the last bracket'
      },
      {
        role: 'user',
        content: userResponse
      }
    ],
    model: 'llama3-8b-8192',
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null
  })

  const fullResponse = chatCompletion.choices[0]?.message?.content || ''

  return fullResponse
}

module.exports = { getGroqChatCompletion }
