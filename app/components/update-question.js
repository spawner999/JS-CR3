import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm() {
      this.set('isSelected', true);
    },
    submitUpdate(question){
      var params = {
        author: this.get('author'),
        name: this.get('name'),
        notes: this.get('notes')
      };
      this.set('isSelected', false);
      this.sendAction('sendUpdate', params, question);
    }
  }

});
