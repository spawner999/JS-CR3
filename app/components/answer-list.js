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
    },
    dateSort(){
      var sorting = ['date:desc'];
      this.set('sorting', sorting);
    },
    karmaSort(){
      var sorting = ['karma:desc'];
      this.set('sorting', sorting);
    }
  }
});
