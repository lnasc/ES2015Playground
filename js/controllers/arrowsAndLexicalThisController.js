const EVENS = [2, 4, 6, 8, 10];

class ArrowsAndLexicalController {
  constructor() {
    // Expression bodies
    this.odds = EVENS.map(v => v + 1);
    this.nums = EVENS.map((v, i) => v + i);
    this.fives = [];
    this.friends = [];
    let that = this;


    // Statement bodies
    this.nums.forEach(v => {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    });

    // Lexical this
    let bob = {
      _name: 'Bob',
      _friends: ['Sally', 'Jim', 'Bob'],
      printFriends() {
        this._friends.forEach(f =>
          that.friends.push(this._name + ' knows ' + f));
      }
    };

    bob.printFriends();
  }
}

export default ArrowsAndLexicalController;
