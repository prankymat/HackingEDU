Template.HomePanel.onRendered(function(){
  $('.parallax').parallax();
})

Template.HomePanel.helpers({
  teachersResults: function() {
    return Teacher.find({$or: [{"FirstName":{'$regex':Session.get('home-query')}},{"LastName":{'$regex':Session.get('home-query')}}]})
  },
  schoolsResults: function() {
    return School.find({SchoolName: {'$regex':Session.get('home-query')}})
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
  }
})
