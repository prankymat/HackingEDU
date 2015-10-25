Template.TopNav.onRendered(function(){
    
$(".dropdown-button").dropdown();
        
});

Template.TopNav.helpers({
  currentUser: function() {
    return Meteor.userId();
  }
})