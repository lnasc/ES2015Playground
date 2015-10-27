import { default as controllersModule } from './controllers/controllers'

var moduleName = 'playground';

function config($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/arrowsAndLexicalThis.html',
    controller: 'arrowsAndLexicalThisController',
    controllerAs: 'vm'
  })
  .otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];

var app = angular.module(moduleName, ['ngRoute', controllersModule])
  .config(config);

export default moduleName;