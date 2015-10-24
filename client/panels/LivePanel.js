Template.LivePanel.helpers({
  people_count: function() {
    return People.find({}).count();
  },

  people: function() {
    return People.find({}, {sort: {created_on: -1}});
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});
