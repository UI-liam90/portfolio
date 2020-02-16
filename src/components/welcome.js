import React from "react"

const Welcome = () => {
  const WelcomeMessage = () => {
    const time = new Date();
    const hour = time.getHours();
    if(hour >= 0 && hour < 12) {
      return `Good Morning ${hour}`
    } else if(hour >= 12 && hour < 18) {
      return `Good Afternoon ${hour}`
    } else {
      return `Good evening ${hour}`
    }
  }
  return (
    <>
      <h1><WelcomeMessage /></h1>
    </>
  );
}

export default Welcome