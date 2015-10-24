Template.MainLayout.helpers({
  'connected': function(){
    return Meteor.status().connected;
  }
});
