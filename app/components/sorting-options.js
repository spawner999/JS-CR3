import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: true,
  actions: {
    toggleDate(){
      this.set('isSelected', false);
      this.sendAction('sendDate');
    },
    toggleKarma(){
      this.set('isSelected', true);
      this.sendAction('sendKarma');
    }
  }
});
