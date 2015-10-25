Template.SchoolSide.helpers({
query_param: function() {
    return this.aSchoolID;
  },

  thisSchool: function() {
    return (School.findOne({SchoolID:parseInt(this.aSchoolID)}));
  }

});