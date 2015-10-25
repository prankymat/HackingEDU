
Router.route('/', function(){
  this.layout('HomeLayout')
  this.render('HomePanel')
})

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

Router.route('/profile-school', function(){
  this.render('ProfilePanelSchool')
  this.render('SchoolSide',{to:"aside"})
});

Router.route('/Setting', function(){
  this.layout('HomeLayout')
  this.render('SettingPanel')
});

Router.route('/search/:searchQuery', function(){
  this.layout('HomeLayout')
	this.render('SearchResults',{
		data: function (){ return {searchQuery:this.params.searchQuery}}})
});

