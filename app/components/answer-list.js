import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpvote(answer){
      this.sendAction('sendUpvote', answer);
    },
    sendDownvote(answer){
      this.sendAction('sendDownvote', answer);
    }
  }
});
