import * as math from '../components/math';
import { sum, pi } from '../components/math';
import exp, { pi as pi2, e } from '../components/mathPlusPlus';

class ModulesController {
  constructor() {
    this.a = '2π = ' + math.sum(math.pi, math.pi);
    this.b = '2π = ' + sum(pi, pi);
    this.c = '2π = ' + exp(pi2, e);
  }
}

export default ModulesController;