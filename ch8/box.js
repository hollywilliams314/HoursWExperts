// Write a function called withBoxUnlocked that takes a function value as
// argument, unlocks the box, runs the function, and then ensures that the
// box is locked again before returning, regardless of whether the argument
// function returned normally or threw an exception.

// This exercise calls for a finally block. Your function should first unlock
// the box and then call the argument function from inside a try body. The finally
// block after it should lock the box again.

// To make sure we don’t lock the box when it wasn’t already locked, check its
//  lock at the start of the function and unlock and lock it only when it
// started out locked.

//"use strict";
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {

  if (box.locked) {
      box.unlock();
  }
  try {
      body();
  }
  finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box);
console.log(box.content);

console.log(box.locked);    // book's test
// → true
