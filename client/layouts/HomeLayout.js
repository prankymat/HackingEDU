Template.HomeLayout.helpers({
  'connected': function(){
    return Meteor.status().connected;
  }
});
