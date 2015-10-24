Template.SearchResults.helpers({
  result_count: function() {
  	if(searchType === "teacher"){
  		return Teachers.find({$or: [{"FirstName":{'$regex':searchQuery}},{"LastName":{'$regex':searchQuery}}]}).count();
  	}
  	else if(searchType === "school"){
  		return Schools.find({"SchoolName":{'$regex':searchQuery}}).count();
  	}
  	else{
  		return 0;
  	}
  },

  query_param: function() {
    return this.searchQuery;
  },

  results: function() {
  	if(searchType === "teacher"){
  		return Teachers.find({$or: [{"FirstName":{'$regex':searchQuery}},{"LastName":{'$regex':searchQuery}}]});
  	}
  	else if(searchType === "school"){
  		return Schools.find({"SchoolName":{'$regex':searchQuery}});
  	}
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});
