/*
Teachers = new Mongo.Collection('teacher');
Schools = new Mongo.Collection('school');
Students = new Mongo.Collection('student');
Achievements = new Mongo.Collection('achievement');
Tests = new Mongo.Collection('test');
Comments = new Mongo.Collection('comment');
/*
Schools.insert({SchoolID: 1, SchoolName: "San Jose High School", Street: "1234 San Jose ave", City: "San Jose", State: "CA"});
Schools.insert({SchoolID: 2, SchoolName: "Homestead High School", Street: "4312 Homestead rd", City: "Cupertino", State: "CA"});
Schools.insert({SchoolID: 3, SchoolName: "Mountain View High School", Street: "2143 California st", City: "Mountain View", State: "CA"});

Teachers.insert({TeacherID: 1, LastName: "Huang", FirstName: "Jason", Birthday: "11/03/1904", GraduateFrom: ["Mars University", "Luna University"], TeachSince: "2010", Subjects: ["Calculus", "Algrbra"], DateStart: ["6/10/2013"], DateEnd: [""], Schools: [1]});
Teachers.insert({TeacherID: 2, LastName: "Chen", FirstName: "Phoenix", Birthday: "7/22/1905", GraduateFrom: ["Sun University"], TeachSince: "2008", Subjects: ["Computer Science"], DateStart: ["4/8/1979", "6/19/1995"], DateEnd: ["5/9/1990", ""], Schools: [3, 2]});
Teachers.insert({TeacherID: 3, LastName: "Wo", FirstName: "Matthew", Birthday: "5/13/1945", GraduateFrom: ["Moon University"], TeachSince: "1980", Subjects: ["PE"], DateStart: ["11/7/1990"], DateEnd: ["19/2000"], Schools: [2]});
Teachers.insert({TeacherID: 4, LastName: "Quock", FirstName: "Brain", Birthday: "5/3/1920", GraduateFrom: ["Jupiter University"], TeachSince: "1980", Subjects: ["Physics"], DateStart: ["1/21/1990", "8/18/2014"], DateEnd: ["4/19/2009", ""], Schools: [3, 1]});
Teachers.insert({TeacherID: 5, LastName: "Yuan", FirstName: "Steven", Birthday: "3/29/1948", GraduateFrom: ["Mercury University"], TeachSince: "1980", Subjects: ["Literature"], DateStart: ["12/01/1988", "3/28/2004"], DateEnd: ["8/18/2000"], Schools: [1]});

Students.insert({"StudentID":1,"LastName":"Brooks","FirstName":"Anthony","Birthday":"12/21/1989","Colleges":"abrooks0","Companys":"Gabvine","TeacherID":1,"LinkinedID":6994166}
);
Students.insert({"StudentID":2,"LastName":"Ortiz","FirstName":"Scott","Birthday":"06/22/1994","Colleges":"sortiz1","Companys":"Plambee","TeacherID":5,"LinkinedID":2403674}
);
Students.insert({"StudentID":3,"LastName":"Matthews","FirstName":"Wanda","Birthday":"03/01/2010","Colleges":"wmatthews2","Companys":"Edgeblab","TeacherID":1,"LinkinedID":3075383}
);
Students.insert({"StudentID":4,"LastName":"Meyer","FirstName":"Adam","Birthday":"01/14/1999","Colleges":"ameyer3","Companys":"Eazzy","TeacherID":1,"LinkinedID":2442102}
);
Students.insert({"StudentID":5,"LastName":"Moreno","FirstName":"Nicholas","Birthday":"09/12/1989","Colleges":"nmoreno4","Companys":"Gabvine","TeacherID":4,"LinkinedID":3079905}
);
Students.insert({"StudentID":6,"LastName":"Peters","FirstName":"Lawrence","Birthday":"05/27/1991","Colleges":"lpeters5","Companys":"Aimbo","TeacherID":4,"LinkinedID":3938036}
);
Students.insert({"StudentID":7,"LastName":"Coleman","FirstName":"Carlos","Birthday":"03/07/2004","Colleges":"ccoleman6","Companys":"Yoveo","TeacherID":4,"LinkinedID":7216464}
);
Students.insert({"StudentID":8,"LastName":"Ruiz","FirstName":"Deborah","Birthday":"04/13/2004","Colleges":"druiz7","Companys":"Yacero","TeacherID":2,"LinkinedID":8157101}
);
Students.insert({"StudentID":9,"LastName":"Moore","FirstName":"Frances","Birthday":"12/23/1998","Colleges":"fmoore8","Companys":"Yombu","TeacherID":5,"LinkinedID":2900940}
);
Students.insert({"StudentID":10,"LastName":"Little","FirstName":"Diane","Birthday":"07/19/2005","Colleges":"dlittle9","Companys":"Brainsphere","TeacherID":3,"LinkinedID":4038043}
);
Students.insert({"StudentID":11,"LastName":"Cole","FirstName":"Joe","Birthday":"01/02/1990","Colleges":"jcolea","Companys":"Topicstorm","TeacherID":3,"LinkinedID":3704779}
);
Students.insert({"StudentID":12,"LastName":"Ortiz","FirstName":"Joyce","Birthday":"08/31/2011","Colleges":"jortizb","Companys":"Photobean","TeacherID":1,"LinkinedID":4626092}
);
Students.insert({"StudentID":13,"LastName":"Rivera","FirstName":"Paul","Birthday":"08/15/2004","Colleges":"priverac","Companys":"Babbleopia","TeacherID":1,"LinkinedID":4782384}
);
Students.insert({"StudentID":14,"LastName":"Montgomery","FirstName":"Jean","Birthday":"12/09/1996","Colleges":"jmontgomeryd","Companys":"Edgeclub","TeacherID":1,"LinkinedID":3099059}
);
Students.insert({"StudentID":15,"LastName":"Carter","FirstName":"Irene","Birthday":"01/30/1987","Colleges":"icartere","Companys":"Skipfire","TeacherID":2,"LinkinedID":9593134}
);
Students.insert({"StudentID":16,"LastName":"Morgan","FirstName":"Bruce","Birthday":"02/20/1984","Colleges":"bmorganf","Companys":"Vipe","TeacherID":2,"LinkinedID":6138037}
);
Students.insert({"StudentID":17,"LastName":"Wilson","FirstName":"Paul","Birthday":"10/24/1996","Colleges":"pwilsong","Companys":"Ailane","TeacherID":3,"LinkinedID":4916139}
);
Students.insert({"StudentID":18,"LastName":"Castillo","FirstName":"Norma","Birthday":"11/30/1987","Colleges":"ncastilloh","Companys":"Skimia","TeacherID":2,"LinkinedID":4635694}
);
Students.insert({"StudentID":19,"LastName":"Gutierrez","FirstName":"Kelly","Birthday":"08/15/2007","Colleges":"kgutierrezi","Companys":"Meevee","TeacherID":4,"LinkinedID":7441135}
);
Students.insert({"StudentID":20,"LastName":"Anderson","FirstName":"Dennis","Birthday":"07/20/1996","Colleges":"dandersonj","Companys":"Meeveo","TeacherID":4,"LinkinedID":7537329});

Achievements.insert({"AchieveID":1,"TeacherID":4,"StudentID":20,"Title":"in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non","DateOfEvent":"05/05/2015","Description":"felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero"}
);
Achievements.insert({"AchieveID":2,"TeacherID":2,"StudentID":9,"Title":"ullamcorper purus sit amet nulla quisque arcu libero rutrum ac","DateOfEvent":"01/28/2010","Description":"luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer"}
);
Achievements.insert({"AchieveID":3,"TeacherID":3,"StudentID":20,"Title":"molestie hendrerit at vulputate vitae nisl aenean lectus","DateOfEvent":"05/18/2010","Description":"placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim"}
);
Achievements.insert({"AchieveID":4,"TeacherID":5,"StudentID":20,"Title":"morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt","DateOfEvent":"03/11/2009","Description":"eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit"}
);
Achievements.insert({"AchieveID":5,"TeacherID":4,"StudentID":13,"Title":"volutpat dui maecenas tristique est et","DateOfEvent":"05/24/2014","Description":"platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna"}
);
Achievements.insert({"AchieveID":6,"TeacherID":4,"StudentID":9,"Title":"nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus","DateOfEvent":"03/26/2015","Description":"metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum"}
);
Achievements.insert({"AchieveID":7,"TeacherID":4,"StudentID":8,"Title":"nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque","DateOfEvent":"10/02/2012","Description":"eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis"}
);
Achievements.insert({"AchieveID":8,"TeacherID":3,"StudentID":11,"Title":"proin eu mi nulla ac enim in tempor turpis nec","DateOfEvent":"09/25/2009","Description":"sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in"});
*/