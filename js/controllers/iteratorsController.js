class IteratorsController {
  constructor() {
    let fibonacci = {
      [Symbol.iterator]() {
        let pre = 0,
          cur = 1;
        return {
          next() {
            [pre, cur] = [cur, pre + cur];
            return {
              done: false,
              value: cur
            };
          }
        };
      }
    };

    this.a = [];
    for (let n of fibonacci) {
      // truncate the sequence at 1000
      if (n > 1000) {
        break;
      }
      this.a.push(n);
    }
  }
}

export default IteratorsController;