/* 
Once upon a time there was a big dog. One day, the dog went to the park. At the park, the dog met a crazy squirrel. The dog chased the squirrel up a tree. The squirrel was very upset and threw acorns at the dog. The dog barked and barked but he couldn't catch the squirrel. Finally, the dog's owner came took the dog back home.
*/

function main() {
  addClickEvent("button", showMadLib);
  addClickEvent("reset", reset);
}

function showMadLib() {
  let animal = getInputValue("animal");
  let adj1 = getInputValue("adj1");
  let location = getInputValue("location");
  let animal2 = getInputValue("animal2");
  let adj2 = getInputValue("adj2");
  let verb = getInputValue("verb");
  let object = getInputValue("object");
  let emotion = getInputValue("emotion");
  let verb2 = getInputValue("verb2");
  let obj2 = getInputValue("object2");
  let verb3 = getInputValue("verb3");
  let location2 = getInputValue("location2");


  let story = "Once upon a time there was a " + adj1 + " " + animal + ". One day, the " + animal + " went to the " + location + ". At the " + location + ", the dog met a " + adj2 + " " + animal2 + ". The " + animal + " " + verb + "ed the " + animal2 + " up a " + object + ". The " + animal2 + " was very " + emotion + " and " + verb2 + " a " + obj2 + " at the " + animal + ". The " + animal + " " + verb3 + "ed and " + verb3 + "ed, but he couldn't catch the " + animal2 + ". Finally, the " + animal + "'s owner came and took the " + animal + " back to the " + location2 + ". THE END!";

  setText(story, "madlib");
}

function reset() {
  clearInputValue("animal");
  clearInputValue("adj1");
  clearInputValue("location");
  clearInputValue("animal2");
  clearInputValue("adj2");
  clearInputValue("verb");
  clearInputValue("object");
  clearInputValue("emotion");
  clearInputValue("verb2");
  clearInputValue("object2");
  clearInputValue("verb3");
  clearInputValue("location2");
  setText("Madlib will appear here after the button is pressed", "madlib");
}

main();