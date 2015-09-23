import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleNavMenu: function() {
      $("ul.headerNav").toggleClass("open")
    }
  }
});
