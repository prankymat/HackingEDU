Template.SearchResults.helpers({
  query_param: function() {
    return this.searchQuery;
  },

  teacherResults: function() {
      var q = new RegExp(this.searchQuery,'i');
  		var arr = Teacher.find({$or: [{"FirstName":{'$regex':q}},{"LastName":{'$regex':q}}]}).fetch();

      var school_arr= ['San Jose High School','Homestead High School','Mountain View High School'];
      _.each(arr,function(teacher){
        teacher.Schools = school_arr[(teacher.Schools) % 3];
      });

      return arr;
  },

  schoolResults: function() {
    var q = new RegExp(this.searchQuery,'i');
    var school_arr = School.find({"SchoolName":{'$regex':q}}).fetch();
    _.each(school_arr,function(school){
      school.numTeachers = Teacher.find({"Schools":school.SchoolID}).count();
    });

    return school_arr;
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  },

  clickedOne: function(){
    Session.set("tab", 0);
  },

  clickedTwo: function(){
    Session.set("tab", 1);
  }

});

Template.SearchResults.onRendered(function(){
  $('ul.tabs').tabs();
  Session.set("tab", 0);
});
