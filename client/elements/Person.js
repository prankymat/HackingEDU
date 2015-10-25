Template.Person.events({
  'click .card-panel': function(event) {
    console.log($(event.currentTarget).attr("docid"));
  }
})
