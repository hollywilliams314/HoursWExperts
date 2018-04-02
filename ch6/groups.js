class Group {
  constructor () {
    this.elements = [];
  }
  add (value) {
    if (!this.has(value)) {
      this.elements.push(value);
    }
  }
  delete (element) {
    this.elements = this.elements.filter(v => v!== element);
  }
  has (element) {
    return this.elements.includes(element);
  }
  static from (array) {
    let group = new Group;
    for (let element of array) {
      group.add(element);
    }
    return group;
  }
}


// offical tests
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
