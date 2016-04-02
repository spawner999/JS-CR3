import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.set('isSelected', true);
    },
    submitQuestion(){
      var categories = [];
      if(this.get('food')){
        categories.push('food');
      }
      if(this.get('movies')){
        categories.push('movies');
      }
      if(this.get('politics')){
        categories.push('politics');
      }
      var params = {
        author: this.get('author')? this.get('author') : 'anonymous',
        name: this.get('name')? this.get('name'): 'Essere o non Essere?',
        date: new Date(),
        notes: this.get('notes')? this.get('notes'): 'answer asap please'
      };
      this.set('isSelected', false);
      this.set('author', '');
      this.set('name', '');
      this.sendAction('sendQuestion', params, categories);
    }
  }
});
