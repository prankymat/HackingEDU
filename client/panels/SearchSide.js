Template.SearchSide.helpers({
  query_param: function() {
    return this.searchQuery;
  },

  results: function() {
  	if(this.searchType === "teacher"){
  		var arr = Teacher.find({$or: [{"FirstName":{'$regex':this.searchQuery}},{"LastName":{'$regex':this.searchQuery}}]}).fetch();
      console.log(arr);
  	}
  	else{
  		return School.find({"SchoolName":{'$regex':this.searchQuery}});
  	}
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});
