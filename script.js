const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const targetDiv = document.getElementById("hide");
const para=document.querySelector(".para");
const para1=document.querySelector(".para1");
const btn = document.getElementById("btn");
btn.onclick = function () {
    if (targetDiv.style.background !== "none") {
      targetDiv.style.background="none";
      para.style.display="none";
      para1.style.display="none";
    } else {
      targetDiv.style.background="linear-gradient(100deg, #ff220084, #e81d1d7a, #e8b91d8a, #e5e81d84, #1de83f82, #1ddee88f, #2b1de894, #df00f389, #df00f385)";
      para.style.display="inline-flex";
      para1.style.display="inline-flex";
    }
  };

let userMessage = null; // Variable to store
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Creating a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // returning chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    //properties and message for the API request
    // const requestOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${API_KEY}`
    //     },
    //     body: JSON.stringify({
    //         model: "gpt-3.5-turbo",
    //         messages: [{role: "user", content: userMessage}],
    //     })
    // }

    // //POST request to API, get response and set the reponse as paragraph text
    // fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    //     messageElement.textContent = data.choices[0].message.content.trim();
    // }).catch(() => {
    //     messageElement.classList.add("error");
    //     messageElement.textContent = "Oops! Something went wrong. Please try again.";
    // }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
    let arr=userMessage.split(" ");
    if(userMessage.includes("depressed") || userMessage.includes("depress") || userMessage.includes("depression")) {
        messageElement.textContent= "I understand that things might feel overwhelming right now, and I want you to know that you don't have to go through this alone. If you ever feel like talking, I'm here to listen without judgment. Remember, your feelings are valid, and it's okay to not be okay sometimes.\n.\n I truly care about your well-being, and I'm here to support you in any way I can. Please remember to take care of yourself.\n Even small steps like going for a short walk or indulging in activities you enjoy can make a difference. I'm here to help with practical things too, like running errands or just spending time together. \n.\nI believe in your strength to overcome these challenges. We'll take things one step at a time, and I'll be right here to support you every step of the way.";
    }
    if(userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("hey there")) {
        messageElement.textContent= "Hi lad! It's happy to see you here. Come let's talk for a while.\n Tell me what's the reason you have come here."
    }
    else if((userMessage.includes("failed") || userMessage.includes("failing") || userMessage.includes("fail") || userMessage.includes("cheat")|| userMessage.includes("cheated")) && (userMessage.includes("love"))) {
        messageElement.textContent= "I'm really sorry to hear that things haven't worked out the way you hoped in your relationship. I can imagine how much you must be hurting right now, and I want you to know that I'm here for you. Experiencing a setback in love is never easy, and it's okay to feel a mix of emotions, from sadness to frustration.\n Remember that these feelings are a natural part of the healing process. Give yourself permission to grieve the loss and take the time you need to process everything.\n.\n While it might not feel like it right now, this experience can also be an opportunity for growth and self-discovery. You have so many wonderful qualities that someone will truly appreciate and cherish when the time is right.\n.\n If you ever want to talk or need a listening ear, I'm here. And when you're ready, we can explore ways to move forward and heal together. You're not alone in this journey, and I believe in your strength to overcome this challenge.";
    }

    else if((userMessage.includes("marks"))&&(userMessage.includes("low") || userMessage.includes("less") || userMessage.includes("fail") || userMessage.includes("failed"))) {
        messageElement.textContent="I know how disappointing it can be when things don't go as planned, but I want you to remember that your worth goes beyond any single test or score. Exams are just one measure of your abilities, and they don't define who you are or your potential for success. It's okay to feel disappointed right now, but I want you to know that this setback doesn't determine your future.\n.\n What matters most is how you respond to challenges like this. Instead of dwelling on the results, use this as an opportunity to learn and grow. Take some time to reflect on what went well and what you could improve on. Every experience, whether good or bad, can teach us something valuable. \nRemember that you're not alone in this. We all face moments of disappointment, and it's okay to lean on your support network for encouragement. Take a deep breath, give yourself some grace, and keep moving forward. You have the strength and determination to overcome this setback and come out even stronger.";
    }
    else if((userMessage.includes("mom")||userMessage.includes("dad")||userMessage.includes("parents")||userMessage.includes("sister")||userMessage.includes("brother")||userMessage.includes("sibling"))&&(userMessage.includes("scold")||messageElement.includes("scolded")||messageElement.includes("beat")||messageElement.includes("torture")||userMessage.includes("don't care")||userMessage.includes("don't bother")||userMessage.includes("doesn't bother")||userMessage.includes("does not bother"))) {
        messageElement.textContent="Don't forget, they are the best of your life \n. I want you to know that I'm here for you, and I'm truly sorry to hear that you're feeling this way. It's really tough when the people we care about don't show the understanding or support we need.\n.\nRemember, your worth isn't determined by how others treat you. You are valuable, deserving of love, and your feelings are important. If you're comfortable, it might help to have an open and honest conversation with them about how you're feeling. They might not realize the impact of their actions, and expressing your emotions could lead to a better understanding between all of you.\n.\nBut regardless of their actions, please know that you have a support system here with me. You are not alone, and I'm always here to listen, to offer a shoulder to lean on, and to remind you of your strengths. You are resilient, and you have the power to rise above challenging situations.Sending you a virtual hug and all the care you deserve.";
    }
    else if(userMessage.includes("happy")||userMessage.includes("joy")||userMessage.includes("joyfull")) {
        messageElement.textContent="That's wonderful to hear! I'm really happy for you. What's making you feel so happy today? It's always great to celebrate these moments of joy. 😊";
    }
    else if(userMessage.includes("confuse")||userMessage.includes("confused")) {
        messageElement.textContent="It's completely okay to feel unsure when making a decision. It's a natural part of the process. Remember, decisions can be challenging, but they also present opportunities for growth and learning. To help you navigate this, you could try breaking down the decision into smaller parts, listing the pros and cons, or considering your long-term goals.\n.\n Don't hesitate to reach out to those you trust for advice and perspective. Ultimately, trust your instincts and know that there's no 'perfect' choice – what matters is that you make the best decision with the information you have. You've got this!";
    }
    else if(userMessage.includes("healing")||userMessage.includes("freshness")) {
        messageElement.textContent="I sense that you could use some healing and a fresh perspective for your mind. Remember that taking care of yourself is essential, and it's okay to prioritize your well-being. Here are a few suggestions to help you find some inner peace and rejuvenation:\n.\nNature Walk: Spend some time outdoors, whether it's a leisurely stroll in a park or a hike in the woods. Nature has a way of soothing the mind and uplifting the spirit.\n.\nMeditation and Mindfulness: Dedicate a few minutes each day to meditation or mindfulness exercises. They can help you stay present, reduce stress, and cultivate a sense of calm.\n.\nCreative Outlet: Engage in a creative activity you enjoy, whether it's painting, writing, playing a musical instrument, or crafting. Letting your creative energy flow can be incredibly therapeutic.\n.\nYoga or Exercise: Physical activity can have a positive impact on your mental well-being. Try yoga, jogging, dancing, or any exercise that makes you feel good.\n.\nRead or Listen: Immerse yourself in a good book or listen to soothing music or a podcast that resonates with you.\n.\nRemember, healing takes time, and it's a journey. Be patient with yourself and allow yourself the space you need to heal. You deserve all the love and care in the world.";
    }
    else if(userMessage.includes("thankyou")||userMessage.includes("thanks")){
        messageElement.textContent="I'll be happy if you are happy don't forget that."
    }

}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clearing the input textarea and seting its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Appending the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 1000);
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey) {
        // && window.innerWidth > 800
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
