import Ember from 'ember';

export default Ember.Component.extend({
  sortedAnswers: Ember.computed.sort('answers', 'sorting'),
  sorting: ['karma:desc'],
  actions: {
    sendUpvote(answer){
      this.sendAction('sendUpvote', answer);
    },
    sendDownvote(answer){
      this.sendAction('sendDownvote', answer);
    }
  }
});
