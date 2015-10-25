Template.ProfileSide.helpers({
  query_param: function() {
    return this.aTeacherID;
  },

  theTeacher: function() {
  	console.log(this.aTeacherID);
  	console.log(Teacher.findOne({TeacherID:parseInt(this.aTeacherID)}));
    return (Teacher.findOne({TeacherID:parseInt(this.aTeacherID)}));
  }
});