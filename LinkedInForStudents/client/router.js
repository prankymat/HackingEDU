Router.configure({
  layoutTemplate: 'MainLayout'
});

Router.route('/test-people', function(){
  this.render('LivePanel')
});

Router.route('/profile-people', function(){
  this.render('ProfilePanelStuPerform')
  this.render('ProfileSide',{to:"aside"})
});

Router.route('/search/:searchType/:searchQuery', function(){
	this.render('SearchResults',{
		data: function (){ return {searchQuery:this.params.searchQuery, searchType:this.params.searchType}}});
	this.render('SearchSide',{
		to:"aside",
		data: function (){ return {searchQuery:this.params.searchQuery, searchType:this.params.searchType}}});});
});

Router.route('/', function(){
  this.render('HomePanel')
})
