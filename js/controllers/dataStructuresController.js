class DataStructuresController {
  constructor() {
    // Sets
    let s = new Set();
    s.add('hello').add('goodbye').add('hello');
    this.a = s.size;
    this.b = s.has('hello');

    // Maps
    let m = new Map();
    m.set('hello', 42);
    m.set(s, 34);
    this.c = m.get(s);

    // Weak Maps
    let wm = new WeakMap();
    wm.set(s, {
      extra: 42
    });
    this.d = wm.size;

    // Weak Sets
    /* Because the added object has no other references,
       it will not be held in the set */
    let ws = new WeakSet();
    ws.add({
      data: 42
    });
  }
}

export default DataStructuresController;