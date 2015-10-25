Router.configure({
  layoutTemplate: 'MainLayout'
});

Router.route('/test-people', function(){
  this.render('LivePanel')
});

Router.route('/profile-people/:aTeacherID', function(){
  this.render('ProfilePanelStuPerform')
  this.render('ProfileSide',{
  	to:"aside",
	data: function (){ return {aTeacherID:this.params.aTeacherID}}})
});

Router.route('/search/:searchQuery', function(){
  this.layout('HomeLayout')
	this.render('SearchResults',{
		data: function (){ return {searchQuery:this.params.searchQuery}}})
});

Router.route('/', function(){
  this.layout('HomeLayout')
  this.render('HomePanel')
})
