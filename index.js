const quotes =[
    "The future depends on what you do today. - Mahatma Gandhi",
    "Don't watch the clock, do what is does. Keep going. -Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. -Confucius",
    "The only way to achieve the impossible is to blieve it is possible. -Charles Kingsleigh",
    "You are never too old to set another goal or to dream a new dream. -C.S.Lewis",
    "The only way to do great work is to love what you do. -Steve Jobs",

];
const generatebtn = document.getElementById("generate-btn");
const quoteDisplay = document.getElementById("Quote");

generatebtn = addEventListener("click", generateQuote);

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote;

}
