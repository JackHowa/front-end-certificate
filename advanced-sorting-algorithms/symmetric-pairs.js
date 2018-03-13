function sym(args) {
  // flatten arguments 
  // create array of arguments object 
  // use reduce 
  let flatArray = Array.from(arguments).reduce( (previous, current) => [...previous, ...current]);
  return flatArray;
}

// isn't a set only allows unique elements 
// want only one 
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3,4,5]

// day 9 or 8? 
// liked working with dash docs. much clearer knowing the source. great explanaations too
// didn't like turbulence while coding 
// feels good to get things done when you wouldn't think it's possible 
// just gotta push it and document my work. and tweet it
// also, I encouraged people on the train to work today so that's set
// probably could have gotten this work done at the airport where I had wifi to push 
// but this is kind of meditative