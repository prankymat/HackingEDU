
Template.ProfilePanelAchievements.helpers(
{
	achievement: function() {
		var achievements = Achievement.find({}).fetch();
		var achievement = [];
		for(var a in achievements)
		{
    		for (var i in a.TeacherID)
    		{
    			//IS this how I use params????
    			//if (params[:id] == i)
    			achievement.push(a);
    		}
		}
		return achievement;
		}
})