import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    upVote(answer){
      this.sendAction('sendUpvote', answer);
    },
    downVote(answer){
      this.sendAction('sendDownvote', answer);
    }
  }
});
