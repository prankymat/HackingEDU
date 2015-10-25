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
    return Session.get('is-querying');
  }
})

Template.HomePanel.events({
  'keyup #query': function() {
    Session.set('home-query', $('#query').val());
    // console.log($('#query').val())
  },
  'focus #query': function() {
    Session.set('is-querying', true);
  },
  'blur #query': function() {
    Session.set('is-querying', false);
  },  
  'search .searchForm': function (event) {
      event.preventDefault();
      var text = event;
      console.log(text);
      //console.log(event.currentTarget."0".form.firstElementChild.value);
            alert("DSFS");
    }
  });
