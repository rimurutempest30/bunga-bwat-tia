onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "hbd tia cantik".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    // Message cycling functionality
    const messages = [
      "Happy Birthday, Tia! 🌸",
      "Hope your special day is filled with joy! 🎉",
      "You deserve all the beautiful flowers in the world! 🌺",
      "May this year bring you endless happiness! ✨",
      "Thank you for being such an amazing person! 💖",
      "Here's to another year of wonderful memories! 🎂",
      "You make the world brighter just by being in it! 🌟",
      "Wishing you love, laughter, and lots of cake! 🍰",
      "I wish you would take me anywhere you go as your digicam! 📸",
      "I hope i can help you through all of your pain as Perrie!",
      "Thank you for keep me for going crazy! 😂",
      "I love you! 💕",
    ];

    const messageText = document.getElementById("message-text");
    const nextBtn = document.getElementById("next-btn");
    let currentMessageIndex = 0;

    nextBtn.addEventListener("click", () => {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;

      // Fade out
      messageText.style.opacity = "0";
      messageText.style.transform = "translateY(-10px)";

      setTimeout(() => {
        messageText.textContent = messages[currentMessageIndex];
        messageText.style.opacity = "1";
        messageText.style.transform = "translateY(0)";
      }, 200);
    });

    // Add transition styles to message text
    messageText.style.transition = "opacity 0.2s ease, transform 0.2s ease";

    clearTimeout(c);
  }, 1000);
};
