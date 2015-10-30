class UnicodeController {
  constructor() {
    // same as ES5.1
    this.a = '𠮷'.length;

    // new RegExp behaviour, opt-in ‘u’
    this.b = '𠮷'.match(/./u)[0].length;

    // new form
    this.c = '\u{20BB7}' === '𠮷' === '\uD842\uDFB7';

    // new String ops
    this.d = "𠮷".codePointAt(0) == 0x20BB7;

    this.e = [];

    // for-of iterates code points
    for (var x of '𠮷') {
      this.e.push(x);
    }
}
}

export default UnicodeController;