Template.SearchSide.helpers({
  query_param: function() {
    return this.searchQuery;
  },

  results: function() {
  	if(this.searchType === "teacher"){
  		return Teacher.find({$or: [{"FirstName":{'$regex':this.searchQuery}},{"LastName":{'$regex':this.searchQuery}}]}).then(function(results){
        console.log(results);
        return results;
      });
  	}
  	else{
  		return School.find({"SchoolName":{'$regex':this.searchQuery}});
  	}
  },

  cannotModal: function() {
    return Session.get('cannotModal');
  }
});
