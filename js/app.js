import { default as controllersModule } from './controllers/controllers'

var moduleName = 'playground';

function config($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/arrowsAndLexicalThis.html',
    controller: 'arrowsAndLexicalThisController',
    controllerAs: 'vm'
  })
  .when('/classes', {
    templateUrl: 'views/classes.html',
    controller: 'classesController',
    controllerAs: 'vm'
  })
  .when('/enhancedObjectLiterals', {
    templateUrl: 'views/enhancedObjectLiterals.html',
    controller: 'enhancedObjectLiteralsController',
    controllerAs: 'vm'
  })
  .when('/templateStrings', {
    templateUrl: 'views/templateStrings.html',
    controller: 'templateStringsController',
    controllerAs: 'vm'
  })
  .when('/destructuring', {
    templateUrl: 'views/destructuring.html',
    controller: 'destructuringController',
    controllerAs: 'vm'
  })
  .when('/defaultRestSpread', {
    templateUrl: 'views/defaultRestSpread.html',
    controller: 'defaultRestSpreadController',
    controllerAs: 'vm'
  })
  .when('/iterators', {
    templateUrl: 'views/iterators.html',
    controller: 'iteratorsController',
    controllerAs: 'vm'
  })
  .when('/generators', {
    templateUrl: 'views/generators.html',
    controller: 'generatorsController',
    controllerAs: 'vm'
  })
  .when('/unicode', {
    templateUrl: 'views/unicode.html',
    controller: 'unicodeController',
    controllerAs: 'vm'
  })
  .when('/modules', {
    templateUrl: 'views/modules.html',
    controller: 'modulesController',
    controllerAs: 'vm'
  })
  .otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];

var app = angular.module(moduleName, ['ngRoute', controllersModule])
  .config(config);

export default moduleName;