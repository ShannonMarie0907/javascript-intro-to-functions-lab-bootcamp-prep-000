function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if(string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if(string === "I love you, Grandma.") {
      return "I love you, too.";
    }
}

/*function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  if (uppercase.toUpperCase() === uppercase); {
    return 'YES INDEED!'
  }
}

function sayHiToGrandma(string) {
  var lowercase = 'hello!'
  if (lowercase.toLowerCase() === lowercase); {
    return 'I can\'t hear you!'
  }
}

function sayHiToGrandma(string) {
  var love = "I love you, Grandma.";
  if (love){
    return "I love you, too.";
  }
}*/
