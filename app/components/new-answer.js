import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.set('isSelected', true);
    },
    submitAnswer(question){
      var params = {
        author: this.get('author')? this.get('author') : 'anonymous',
        content: this.get('content')? this.get('content'): 'Try using a Banana',
        date: new Date(),
        karma: 0,
        question: question
      };
      this.set('isSelected', false);
      this.set('author', '');
      this.set('content', '');
      this.sendAction('sendAnswer', params);
    }
  }
});
