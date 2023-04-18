function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let strRev = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").reverse().join("");

  if (str == strRev) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("race car");