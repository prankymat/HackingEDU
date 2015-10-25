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

Router.route('/profile-school', function(){
  this.render('ProfilePanelSchool')
  this.render('SchoolSide',{to:"aside"})
});

Router.route('/Setting', function(){
  this.layout('HomeLayout')
  this.render('SettingPanel')
});

Router.route('/search/:searchType/:searchQuery', function(){
	this.render('SearchResults',{
		data: function (){ return {searchQuery:this.params.searchQuery, searchType:this.params.searchType}}});
	this.render('SearchSide',{to:"aside"});
}
);

Router.route('/', function(){
  this.layout('HomeLayout')
  this.render('HomePanel')
})
