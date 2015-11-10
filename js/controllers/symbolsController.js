// module scoped symbol
let key = Symbol('key');

export default class SymbolsController {
  constructor(privateData) {
    this[key] = privateData;
  }
}