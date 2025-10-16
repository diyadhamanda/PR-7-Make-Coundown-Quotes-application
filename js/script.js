const quotes = [
  {
    title: "Trailblazing",
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    title: "Resilience",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    title: "Self-Reflection",
    quote: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    title: "Taking Chances",
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    title: "Inner Strength",
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    title: "Opportunity in Struggle",
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    title: "Authenticity",
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    title: "Creating the Future",
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    title: "Choosing Happiness",
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    title: "Living Authentically",
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  }
];

const titleContent = document.querySelector(".title-content");
const titleElement = document.querySelector(".title");
const countdownNumber = document.querySelector(".countdown-number");
const countdownCircle = document.querySelector("svg circle");

const totalTime = 10; 
const circumference = 300;
let quoteIndex = 0;

function showQuote(index) {
  titleElement.textContent = quotes[index].title;
  titleContent.textContent = quotes[index].quote;
}

function startCountdown() {
  let startTime = null;

  countdownCircle.style.strokeDasharray = circumference;
  countdownCircle.style.strokeDashoffset = 0;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / (totalTime * 1000), 1);
    const offset = circumference * progress;

    countdownCircle.style.strokeDashoffset = offset;

    const secondsLeft = Math.ceil(totalTime - elapsed / 1000);
    countdownNumber.textContent = secondsLeft;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
        
      quoteIndex = (quoteIndex + 1) % quotes.length;
      showQuote(quoteIndex);
      countdownCircle.style.strokeDashoffset = 0;
      startCountdown();
    }
  }

  requestAnimationFrame(animate);
}

window.addEventListener("DOMContentLoaded", () => {
  showQuote(quoteIndex);
  startCountdown();
});
