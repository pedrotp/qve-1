import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies');
  this.route('stream');
  this.route('contact');
  this.route('team', function() {
    this.route('teamMember');
  });
  this.route('careers');
  this.route('about');
});

export default Router;
