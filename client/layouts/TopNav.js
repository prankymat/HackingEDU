Template.TopNav.onRendered(function(){

$(".dropdown-button").dropdown();

});

Template.TopNav.helpers({
  currentEmail: function() {
    return Meteor.user().emails[0].address
  }
})
