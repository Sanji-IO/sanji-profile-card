import 'angular-material.css';
import 'angular-sanji-window.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import {sjCore} from 'sanji-core-ui';
import {sjProfileCard} from './sanji-profile-card';

const app = angular.module('webapp', [sjCore, sjProfileCard]);

class AppController {

  constructor() {
  }

  $onInit() {
    this.title = 'Profile 1';
    this.hashtagNum = '1';
    this.profileMessage = `
      <ul>
        <li>APN Auth</li>
        <li>Username: TestUser</li>
        <li>Password: ******</li>
      </ul>
    `;
    this.keyValuePairs = [
      {key: 'APN Type', value: 'Static'},
      {key: 'Authentication Type', value: 'Both'},
      {key: 'APN', value: 'internet'},
      {key: 'SIM', value: 'Slot 1'},
      {key: 'Pin Code', value: '0000'}
    ];
  }
}

app.config($locationProvider => {
  $locationProvider.html5Mode(true);
});

app.run((session, routerHelper) => {
  session.create('token', 'test');
  session.setUserData({
    role: 'admin'
  });

  routerHelper.configureStates([{
    state: 'home',
    config: {
      url: '/'
    }
  }]);
});

app.controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
