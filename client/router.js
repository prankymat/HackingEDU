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

Router.route('/profile-school/:aSchoolID', function(){
  this.render('ProfilePanelSchool',{
   data: function () { return {aSchoolID:this.params.aSchoolID}}})
  this.render('SchoolSide',{
    to:"aside",
  data: function () { return {aSchoolID:this.params.aSchoolID}}})
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

Router.route('/', function(){
  this.layout('HomeLayout')
  this.render('HomePanel')
})
