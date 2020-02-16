import React from "react"

const Welcome = () => {
  const WelcomeMessage = () => {
    let time = new Date();
    let hour = time.getHours();
    if(hour >= 0 && hour < 12) {
      return `Good Morning`
    } else if(hour >= 12 && hour < 18) {
      return `Good Afternoon`
    } else {
      return `Good evening`
    }
  }
  const NiceMessage = () => {
    const greetings = [
      'How are you Today?',
      'I hope you are having a great day :)',
      'How can I help you on this fine day?'
    ]
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    return greeting;
  }
  return (
    <>
      <h1><WelcomeMessage /></h1>
      <h2>My Name is Liam Wright</h2>
      <h3><NiceMessage /></h3>
    </>
  );
}

export default Welcome