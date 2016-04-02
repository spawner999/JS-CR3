import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    saveQuestion(params, categories){
      var self = this;
      var newQuestion = this.store.createRecord('question', params);
      categories.forEach(function(category){
        var params1 = {
        name : category
      }
        var categoryS = self.store.createRecord('category', params1);
          newQuestion.get('categories').addObject(categoryS);
          categoryS.get('questions').addObject(newQuestion);
          newQuestion.save();
          categoryS.save();
      });
      this.transitionTo('index');
    }
  }
});
