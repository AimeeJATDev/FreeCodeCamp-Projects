function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let index;
  let ascii;
  let newStr = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == "!" || str[i] == "?" || str[i] == ".") {
      newStr += str[i];
    }
    else {
      ascii = str.charCodeAt(i) % 26;
      index = String.fromCharCode(ascii);
      newStr += alphabet[ascii];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");