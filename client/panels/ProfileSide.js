Template.ProfileSide.helpers({
  query_param: function() {
    return this.aTeacherID;
  },

  theTeacher: function() {
    return (Teacher.findOne({TeacherID:parseInt(this.aTeacherID)}));
  }
});