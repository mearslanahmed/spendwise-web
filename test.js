const fetch = require('node-fetch');


async function testAiChat() {
  const payload = {
    messages: [
      { role: "user", parts: [{ text: "Explain how AI works in a few words" }] }
    ],
    systemInstruction: "You are a helpful assistant.",
    tools: []
  };

  try {
    const res = await fetch("http://localhost:3000/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("AI Response:");
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error testing:", err);
  }
}

testAiChat();
