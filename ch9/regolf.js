// Fill in the regular expressions

// find car and cat
verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// find pop and prop
verify(/\bpr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

// find ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// find words that end in ious
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// find A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s{1}\.|\,|\:|\;/,
       ["bad punctuation ."],
       ["escape the period"]);

// find A word longer than six letters
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

// find A word without the letter e (or E)
verify(/\b[^e+\b]/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
