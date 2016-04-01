import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  karma: DS.attr(),
  question: DS.belongsTo('question', {async:true})
});
