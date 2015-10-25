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

Router.route('/search/:searchQuery', function(){
	this.render('SearchResults',{
		data: function (){ return {searchQuery:this.params.searchQuery}}});
	this.render('SearchSide',{
		to:"aside",
		data: function (){ return {searchQuery:this.params.searchQuery}}});
});

Router.route('/', function(){
  this.layout('HomeLayout')
  this.render('HomePanel')
})
