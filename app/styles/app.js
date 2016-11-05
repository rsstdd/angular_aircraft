import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

import uiRouter from 'angular-ui-router';

angular.module('angular-aircraft', [uiRouter, uiBootstrap])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/home.html'
      }); 
  }]);
