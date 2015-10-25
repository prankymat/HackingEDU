Template.ProfileSide.helpers({
  query_param: function() {
    return this.aTeacherID;
  },

  theTeacher: function() {
<<<<<<< HEAD
  	console.log(this.aTeacherID);
  	console.log(Teacher.findOne({TeacherID:parseInt(this.aTeacherID)}));
=======
>>>>>>> bb5b633cd702f320d2ffebecf117164143bea867
    return (Teacher.findOne({TeacherID:parseInt(this.aTeacherID)}));
  }
});