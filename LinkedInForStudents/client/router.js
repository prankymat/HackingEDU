Router.configure({
  layoutTemplate: 'MainLayout'
});

Router.route('/test-people', function(){
  this.render('LivePanel')
});

Router.route('/profile-people', function(){
  this.render('ProfilePanel')
  this.render('ProfileSide',{to:"aside"})
});


Router.route('/', function(){
  this.render('HomePanel')
})
