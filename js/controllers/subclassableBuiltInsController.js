import MyArray from '../objects/myArray';

export default class SubclassableBuiltInsController {
  constructor() {
    let myArray = new MyArray();
    myArray[1] = 12;
    this.a = myArray.length;
  }
}