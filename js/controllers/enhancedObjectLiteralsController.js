class EnhancedObjectLiteralsController {
  constructor() {
    this.handlerFlag = 'handler not called yet !';
    let handler = () => { this.handlerFlag = 'handler called !'; };

    let obj = {
      // __proto__
      __proto__: { toString() { return 'parent';} },
      // Does not set internal prototype
      //'__proto__': somethingElse,
      // Shorthand for ‘handler: handler’
      handler,
      // Methods
      toString() {
        // Super calls
        return 'd ' + super.toString();
      },
      // Computed (dynamic) property names
      [ 'prop_' + (() => 42)() ]: 42
    };

    obj.handler();
    this.objectString = obj.toString();
    this.dynamicProperty = obj.prop_42;
  }
}

export default EnhancedObjectLiteralsController;