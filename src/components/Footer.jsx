import React from "react";

export default function Footer() {
  function sendMail(event) {
    const subject = "Hello";
    const body = "Nice to meet you";
    console.log(event);
    window.open(
      `mailto:contact@alexmichalsky.com?subject=${subject}&body=${body}`
    );
  }

  return (
    <div className="content">
      <h1 className="header">STAY S̶̢̭͎̣̠͎̬̩̣̬͚̤̤̣͌̓͋̄̊̾̉͋̃̚U̵͚̬͓̺̗̠̲̮̦̟͚̗̣͌̿̽͗̾̂͆̕̕͜͝͝ͅŖ̸͇̼̮̪̤̤͖̗̼̺̻́̄̐̍̚R̴̢̛̤̪̗̦̦͔̜̯̒̇́̆̍̏̚̚͝͠ͅͅE̶̡̡̦̠̮̘͌̓̇̋͑̈́̓̆͗̆̏̋́͒͠A̷̧̘̦̞͚̤̦͎͍̱͕̯͑̓̽͗̄̏̅̀̅͜L̴̩̫̥̜̈́͂̍̊̽̈́̿͘͠</h1>
      <p></p>

      <button id="myBtn" onClick={sendMail}>
        email me
      </button>
      <a
        href="https://www.facebook.com/alxmichalsky/"
        className="fa fa-facebook"
      ></a>
      <a
        href="https://www.instagram.com/myhousekyi/"
        className="fa fa-instagram"
      ></a>
      <a
        href="https://soundcloud.com/getschwifty"
        className="fa fa-soundcloud"
      ></a>
    </div>
  );
}
