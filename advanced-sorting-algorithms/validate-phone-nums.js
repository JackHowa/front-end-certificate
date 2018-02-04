function telephoneCheck(str) {
  const firstThreeNums = RegExp('/^\d{3}/', 'g'); // first three characters are digits
  return str.match(firstThreeNums) ? true : false;
   
  
}

telephoneCheck("555-555-5555");
