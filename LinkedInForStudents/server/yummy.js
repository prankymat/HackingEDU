Teacher = new Mongo.Collection('teacher');
School = new Mongo.Collection('school');
Student = new Mongo.Collection('student');
Achievement = new Mongo.Collection('achievement');
Test = new Mongo.Collection('test');
Comment = new Mongo.Collection('comment');

	if (Teacher.find().count() === 0) {
        var data = JSON.parse(Assets.getText("teacher.json"));

        data.forEach(function (item, index, array) {
            Teacher.insert(item);
        })
    }

    if (School.find().count() === 0) {
        var data = JSON.parse(Assets.getText("school.json"));

        data.forEach(function (item, index, array) {
            School.insert(item);
        })
    }

    if (Student.find().count() === 0) {
        var data = JSON.parse(Assets.getText("student.json"));

        data.forEach(function (item, index, array) {
            Student.insert(item);
        })
    }

    if (Test.find().count() === 0) {
        var data = JSON.parse(Assets.getText("test.json"));

        data.forEach(function (item, index, array) {
            Test.insert(item);
        })
    }

    if (Achievement.find().count() === 0) {
        var data = JSON.parse(Assets.getText("achievement.json"));

        data.forEach(function (item, index, array) {
            Achievement.insert(item);
        })
    }

    //These code add the teacher to the Schools
    schools = School.find({}).fetch()
    teachers = Teacher.find({}).fetch()
    for (var i = 0; j < teachers.length; i++)
    {
        for (var j = 0; j < schools.length; j++) 
        {
            var schoolID = schools[j].SchoolID
            if (schoolID == teachers[i].Schools)
            {
                School.update({SchoolID: schoolID}, {$addToSet: {Teachers: teachers[j].TeacherID}})
                break
            }
        }
    }

    //These code will add the test to teacher
    tests = Test.find({}).fetch()
    for (var i = 0; i < tests.length; i++)
    {
        for (var j = 0; j < teachers.length; j++)
        {
            var teacherID = teachers[j].TeacherID
            if (teacherID == tests[i].TeacherID)
            {
                Teacher.update({TeacherID: teacherID}, {$addToSet: {Tests: tests[i].TestID}})
                break
            }
        }
    }
