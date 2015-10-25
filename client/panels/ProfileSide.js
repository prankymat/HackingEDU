Template.ProfileSide.helpers({
  query_param: function() {
    return this.aTeacherID;
  },

  theTeacher: function() {
    return (Teacher.find({TeacherID:this.aTeacherID}).fetch());
  }
});
