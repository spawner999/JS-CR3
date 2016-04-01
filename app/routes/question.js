import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id)
  },
  actions: {
    deleteQuestion(question){
      if(confirm('are you sure?')){
        var deleteAllAnswers = question.get('answers').map(function(answer){
          return answer.destroyRecord();
        });
        Ember.RSVP.all(deleteAllAnswers).then(function(){
          return question.destroyRecord();
        });
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
    },
    addAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question.id);
    },
    addUpvote(answer){
      var karma = answer.get('karma');
      answer.set('karma', karma + 1);
      answer.save();
      this.transitionTo('question');
    },
    addDownvote(answer){
      var karma = answer.get('karma');
      answer.set('karma', karma - 1);
      answer.save();
      this.transitionTo('question') //need to find a way to access the ID, possibly need to send params up
    }
  }
});
