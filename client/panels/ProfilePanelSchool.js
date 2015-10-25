Template.ProfilePanelSchool.helpers({
query_param: function() {
    return this.aSchoolID;
  },

  teacherResults: function() {
  	var arr = Teacher.find({Schools:parseInt(this.aSchoolID)}).fetch();
  	console.log(arr);
    return arr;
  }


});