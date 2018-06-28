import './profile-card.scss';
import angular from 'angular';
import ProfileCardComponent from './profile-card.component';

const sjProfileCard = angular.module('sanji.profileCard', [])
  .component('sanjiProfileCard', ProfileCardComponent).name;

export {sjProfileCard};
