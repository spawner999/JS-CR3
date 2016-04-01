import Ember from 'ember';

export default Ember.Component.extend({
  sortedList: Ember.computed.sort('questions', 'sorting'),
  sorting: ['date:desc']
});
