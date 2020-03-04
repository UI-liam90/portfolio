import React from "react"
import "./welcome.css"

const Welcome = () => {
  let welcomeText = '';
  let greetingText = '';
  let time = new Date();
  let hour = time.getHours();
  if(hour >= 0 && hour < 12) {
    welcomeText = 'Good Morning'
  } else if(hour >= 12 && hour < 18) {
    welcomeText = 'Good Afternoon'
  } else {
    welcomeText = 'Good evening'
  }
  const greetings = [
    'How are you Today?',
    'I hope you are having a great day :)',
    'How can I help you on this fine day?'
  ]
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  greetingText = greeting;
  return (
    <>
      <h1>{welcomeText}</h1>
      <h2>My Name is Liam</h2>
      <h3>{greetingText}</h3>
    </>
  );
}

export default Welcome