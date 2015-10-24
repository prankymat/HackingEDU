Template.SearchResults.helpers({
  query_param: function() {
    return this.searchQuery;
  },

  results: function() {
  	if(this.searchType === "teacher"){
  		return Teacher.find({$or: [{"FirstName":{'$regex':this.searchQuery}},{"LastName":{'$regex':this.searchQuery}}]});
  	}
  	else{ //if(this.searchType === "school"){
  		return School.find({"SchoolName":{'$regex':this.searchQuery}});
  	}
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});
