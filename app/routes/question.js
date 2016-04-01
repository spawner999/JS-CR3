import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id)
  },
  actions: {
    deleteQuestion(question){
      if(confirm('are you sure?')){
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    updateQuestion(params, question){
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined){
          question.set('key', params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question.id);
    }
  }
});
