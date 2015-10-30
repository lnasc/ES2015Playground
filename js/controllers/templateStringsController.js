class TemplateStringsController {
  constructor() {
    // Basic literal string creation
    this.basicTemplateString = `This is a pretty little template string.`;

    // Multiline strings
    this.multilineTemplateString = `In ES5 this is
    not legal.`;

    // Interpolate variable bindings
    let name = 'Bob',
      time = 'today';
    this.interpolateTemplateString = `Hello ${name}, how are you ${time}?`;

    // Unescaped template strings
    this.unescapedTemplateString = String.raw `In ES5 "\n" is a line-feed.`;

    let q = 'hello',
      oq = 'hello';
    // Construct an HTTP request prefix is used to interpret the replacements and construction
    this.url = `https://www.google.fr/search?q=${q}&oq=${oq}`;
  }
}

export default TemplateStringsController;