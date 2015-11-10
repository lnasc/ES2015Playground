import ArrowsAndLexicalController from './arrowsAndLexicalThisController';
import ClassesController from './classesController';
import EnhancedObjectLiteralsController from './enhancedObjectLiteralsController';
import TemplateStringController from './templateStringsController';
import DestructuringController from './destructuringController';
import DefaultRestSpreadController from './defaultRestSpreadController';
import IteratorsController from './iteratorsController';
import GeneratorsController from './generatorsController';
import UnicodeController from './unicodeController';
import ModulesController from './modulesController';
import DataStructuresController from './dataStructuresController';
import ProxiesController from './proxiesController';
import SymbolsController from './symbolsController';
import SubclassableBuiltInsController from './subclassableBuiltInsController';

const moduleName = 'controllers';

angular.module(moduleName, [])
  .controller('arrowsAndLexicalThisController', ArrowsAndLexicalController)
  .controller('classesController', ClassesController)
  .controller('enhancedObjectLiteralsController', EnhancedObjectLiteralsController)
  .controller('templateStringsController', TemplateStringController)
  .controller('destructuringController', DestructuringController)
  .controller('defaultRestSpreadController', DefaultRestSpreadController)
  .controller('iteratorsController', IteratorsController)
  .controller('generatorsController', GeneratorsController)
  .controller('unicodeController', UnicodeController)
  .controller('modulesController', ModulesController)
  .controller('dataStructuresController', DataStructuresController)
  .controller('proxiesController', ProxiesController)
  .controller('symbolsController', SymbolsController)
  .controller('subclassableBuiltInsController', SubclassableBuiltInsController);

export default moduleName;
