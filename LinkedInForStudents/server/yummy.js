Teacher = new Mongo.Collection('teacher');
School = new Mongo.Collection('school');
Student = new Mongo.Collection('student');
Achievement = new Mongo.Collection('achievement');
Test = new Mongo.Collection('test');
Comment = new Mongo.Collection('comment');
SchoolGrades = new Mongo.Collection('schoolGrades');

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

    if (SchoolGrades.find().count() === 0) {
        var data = JSON.parse(Assets.getText("schoolGrades.json"));

        data.forEach(function (item, index, array) {
            SchoolGrades.insert(item);
        })
    }

    //These code add the teacher to the Schools
    schools = School.find({}).fetch()
    teachers = Teacher.find({}).fetch()
    for (var i = 0; i < teachers.length; i++)
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

    //These code should count the num of each grade
    schoolGrades = SchoolGrades.find({}).fetch() //an array
    tests = Test.find({}).fetch() //an array
    for (var i = 0; i < schools.length; i++)
    {
        //this step gives me a School
        var school = schools[i]
        var gradeArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (var j = 0; j < school.Teachers.length; j++)
        {
            //this step gives me a teacher
            console.log(j)
            var teacher = Teacher.findOne({TeacherID: school.Teachers[j]})
            for (var k = 0; k < teacher.Tests.length; k++)
            {
                //this step gives me a list of score
                var scores = tests[k].Scores 
                for (var m = 0; m < scores.length; m++)
                {
                    //this give me a single score
                    var score = scores[m]
                    var index
                    if (score > 98)
                        index = 0 //A+
                    else if (score > 92)
                        index = 1 //A
                    else if (score > 90)
                        index = 2 //A-
                    else if (score > 87)
                        index = 3 //B+
                    else if (score > 85)
                        index = 4 //B
                    else if (score > 80)
                        index = 5 //B-
                    else if (score > 77)
                        index = 6 //C+
                    else if (score > 75)
                        index = 7 //C
                    else if (score > 70)
                        index = 8 //C-
                    else if (score > 60)
                        index = 9 //D
                    else
                        index = 10 //F

                    //then I update it
                    gradeArray[index]++
                }
                
            }
            console.log(gradeArray);
        }
        //insert the array to it
        SchoolGrades.update({SchoolID: school.SchoolID}, {$set: {Grades: gradeArray}})
   }
