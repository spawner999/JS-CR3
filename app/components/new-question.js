import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.set('isSelected', true);
    },
    submitQuestion(){
      var params = {
        author: this.get('author')? this.get('author') : 'anonymous',
        name: this.get('name')? this.get('name'): 'Essere o non Essere?',
        date: new Date(),
        notes: 'answer asap please'
      };
      this.set('isSelected', false);
      this.set('author', '');
      this.set('content', '');
      this.sendAction('sendQuestion', params);
    }
  }
});
