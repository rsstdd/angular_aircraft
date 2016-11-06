import angular from 'angular';
import angularMaterialize from 'angular-materialize';

import uiRouter from 'angular-ui-router';

angular.module('my-app', [angularMaterialize, uiRouter])
.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/home.html'
    })
    .state('main', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('collection', {
      url: '/collection',
      templateUrl: 'views/collection.html'
    })
}]);
