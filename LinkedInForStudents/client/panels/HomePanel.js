Template.HomePanel.onRendered(function(){
  $('.parallax').parallax();
})

Template.HomePanel.helpers({
  teachersResults: function() {
    return Teachers.find({name: Session.get('home-query')})
  },
  schoolsResults: function() {
    return Schools.find({name: Session.get('home-query')})
  }
})

Template.HomePanel.events({
  'keyup #query': function(e) {
    Session.set('home-query', $('#query').val());
    // console.log($('#query').val())
  }
})
