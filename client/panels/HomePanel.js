Template.HomePanel.onRendered(function(){
  $('.parallax').parallax();
})

Template.HomePanel.helpers({
  teachersResults: function() {
    var q = new RegExp(Session.get('home-query'), 'i');
    return Teacher.find({$or: [{"FirstName":{'$regex': q}},{"LastName":{'$regex': q}}]})
  },
  schoolsResults: function() {
    var q = new RegExp(Session.get('home-query'), 'i');
    return School.find({SchoolName: {'$regex':q}})
  },
  isQuerying: function() {
    console.log("checking")
    return Session.get('is-querying');
  }
})

Template.HomePanel.events({
  'keyup #query': function() {
    Session.set('home-query', $('#query').val());
    // console.log($('#query').val())
  },
  'focus #query': function() {
    console.log("focused")
    Session.set('is-querying', true);
  },
  'blur #query': function() {
    console.log('blurred');
    Session.set('is-querying', false);
  },
  'submit #query-form': function(e) {
    e.preventDefault();
    Router.go('/search/' + $('#query').val());
  }
})
