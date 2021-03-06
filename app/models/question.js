import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  name: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  notes: DS.attr(),
  date: DS.attr(),
  categories: DS.hasMany('category', {async: true})
});
