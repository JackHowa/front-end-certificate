function telephoneCheck(str) {
  const firstThreeNums = RegExp('/^\d{3}/', 'g'); // first three characters are digi
  return str.match(firstThreeNums) ? true : false;
   
  
}

telephoneCheck("555-555-5555");
