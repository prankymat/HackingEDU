Template.CreatePersonPanel.events({
  'click #submitNewPerson': function(event) {
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();

    People.insert({
      name: name,
      email: email,
      created_on: new Date().getTime()
    });

    $('#createPersonModal').closeModal();

    Session.set('cannotModal', false);
  }
});

Template.CreatePersonPanel.onRendered(function(){
  Session.set('cannotModal', false);
  $('.modal-trigger').leanModal({
      ready: function() {
        Session.set('cannotModal', true);
      },
      complete: function() {
        Session.set('cannotModal', false);
      }
    }
  );
})
