Template.SearchSide.helpers({
  teacherResultsSchool: function() {
      Session.set("objIncrement",Session.get("objIncrement") + 1);
      var q = new RegExp(this.searchQuery,'i');
      var arr = Teacher.find({$or: [{"FirstName":{'$regex':q}},{"LastName":{'$regex':q}}]}).fetch();

      var school_arr= ['San Jose High School','Homestead High School','Mountain View High School'];
      _.each(arr,function(teacher){
        teacher.Schools = school_arr[(teacher.Schools) % 3];
      });

      _.uniq(arr,function(x){
        return x.Schools;
      });
      return arr;
  },

  teacherResultsSubject: function() {
      Session.set("objIncrement",Session.get("objIncrement") + 1);
      var q = new RegExp(this.searchQuery,'i');
      var arr = Teacher.find({$or: [{"FirstName":{'$regex':q}},{"LastName":{'$regex':q}}]}).fetch();
      var returnArray = [];
      _.each(arr,function(x){
        returnArray.concat(x.Subjects);
      });
      _.uniq(returnArray,function(x){
        return x;
      });

      return returnArray;
  },

  schoolResults: function() {
    var x = Session.get("objIncrement") + 1;

    var q = new RegExp(this.searchQuery,'i');
    var school_arr = School.find({"SchoolName":{'$regex':q}}).fetch();
    _.uniq(school_arr,function(x){
      return x.City;
    });
    _.each(school_arr,function(school){
      x = x + 1;
      school.objIncrement = x;
    });

    return school_arr;
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});

Template.SearchSide.onRendered(function(){
  Session.set("objIncrement", 0);
});