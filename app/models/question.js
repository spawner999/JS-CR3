import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('asnwer', {async: true}),
  notes: DS.attr()
});
