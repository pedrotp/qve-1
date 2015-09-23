import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleNavMenu: function() {
      Ember.$("ul.headerNav").toggleClass("open");
    }
  }
});
