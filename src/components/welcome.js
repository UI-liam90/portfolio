import React from "react"
import "./welcome.css"

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: '',
      greeting: ''
    };
    this.time = new Date();
    this.hour = this.time.getHours();
    this.greetings = [
      'How are you Today?',
      'I hope you are having a great day :)',
      'How can I help you on this fine day?'
    ];
  }
  
  // if(this.hour >= 0 && this.hour < 12) {
  //   setWelcome('Good Morning');
  // } else if(hour >= 12 && hour < 18) {
  //   setWelcome('Good Afternoon');
  // } else {
  //   setWelcome('Good Evenng');
  // }
  
  // setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);

  render() {
    return (
      <>
        <h1>{this.state.welcome}</h1>
        <h2>My Name is Liam Wright</h2>
        <h3>{this.state.greeting}</h3>
      </>
    )
  };
}

export default Welcome