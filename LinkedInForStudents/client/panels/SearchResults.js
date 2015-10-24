Template.SearchResults.helpers({
  query_param: function() {
    return this.searchQuery;
  },

  results: function() {
  	if(this.searchType === "teacher"){
  		return Teachers.find({$or: [{"FirstName":{'$regex':this.searchQuery}},{"LastName":{'$regex':this.searchQuery}}]});
  	}
  	else{
  		return Schools.find({"SchoolName":{'$regex':this.searchQuery}});
  	}
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});
