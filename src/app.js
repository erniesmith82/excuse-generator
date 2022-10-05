/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let noun = [
    "Your mom",
    " Rick",
    "Morty",
    "Your grandmother",
    "Summer",
    "Jerry",
    "The Hulk",
    "Beth",
    "Earth",
    "Rose",
    "Tony Stark",
    "Jonesy",
    "Donkey",
    "Shrek",
    "Your dad",
    "Your wife",
    "Pam",
    "Jim",
    "Steve Rogers",
    "Your dog",
    "The government",
    "The company",
    "A group",
    "Homer",
    "Bart"
  ];

  let verb = [
    "is having",
    "saves",
    "does",
    "say",
    "get",
    "makes",
    "goes",
    "knows",
    "takes",
    "sees",
    "comes",
    "thinks",
    "looks",
    "wants",
    "gives",
    "uses",
    "finds",
    "tells",
    "asks",
    "works",
    "seems",
    "feel",
    "tries",
    "leaves",
    "calls"
  ];

  let noun2 = [
    "the time",
    "a person",
    "this year",
    "the way",
    "the day",
    "the thing",
    "a man",
    "the world",
    "a life",
    "a hand",
    "the part",
    "the child",
    "the ninja",
    "my eye",
    "a woman",
    "a place",
    "a work",
    "this week",
    "a case",
    "the point",
    "the government",
    "the company",
    "a group",
    "the problem"
  ];

  let when = [
    "during summer vacation.",
    "on Christmas Eve.",
    "when you woke up this morning.",
    "during Prom.",
    "before class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was playing.",
    "after the eclipse.",
    "after your doctor's appointment."
  ];

  function randomPhrase() {
    document.getElementById("funny").innerHTML =
      noun[Math.floor(Math.random() * noun.length)] +
      " " +
      verb[Math.floor(Math.random() * verb.length)] +
      " " +
      noun2[Math.floor(Math.random() * noun2.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];
  }
  document.getElementById("clickMe").addEventListener("click", randomPhrase);

  // console.log("Hello Rigo from the console!");
};
