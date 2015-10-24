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
        console.log("load test file");
        var data = JSON.parse(Assets.getText("test.json"));

        data.forEach(function (item, index, array) {
            Test.insert(item);
        })
    }