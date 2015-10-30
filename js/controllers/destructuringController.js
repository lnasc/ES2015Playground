class DestructuringController {
  constructor() {
    // list matching
    let [a, , b] = [1, 2, 3];
   

    let obj = {
      first: 'Jane',
      last: 'Doe',
      address: {
        number: 21,
        street: 'Jump Street'
      }
    };

    // object matching
    let {
      first: c,
      last: d,
      address: {
        street: e
      },
      // bull: {
      //   shit: f
      // }
    } = obj; // (A)

    this.c = c;
    this.d = d;
    this.e = e;
    // this.f = f;

    // object matching shorthand
    // binds `op`, `lhs` and `rhs` in scope
    var {
      first, last
    } = obj;

    // Can be used in parameter position
    function foo({
      name: x
    }) {
      this.g = x;
    }
    foo.call(this, {
      name: 5
    });

    // Fail-soft destructuring
    [a] = [];
    a === undefined;

    // Fail-soft destructuring with defaults
    [a = 1] = [];
    a === 1;

    let { length: i } = 'abc';
    let { toString: j } = 123;

    this.i = i;
    this.j = j;
  }
}

export default DestructuringController;