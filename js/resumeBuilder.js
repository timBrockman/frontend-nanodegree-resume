/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	'name': 'Tim Brockman',
	'role': 'Developer',
	'welcomeMessage':'Hello',
	'skills':['eat','drink','sleep'],
	'contacts':{
		'phone':'4076027721',
		'email':'tim@timbrockman.com',
		'github':'timBrockman',
		'linkedin':'timbrockman',
		'location':'Celebration, FL'
	},
	'contact info':'tim@timbrockman.com',
	'picture URL':'https://en.gravatar.com/userimage/13176978/d79b43787e69587972a0f83404db17fa.jpg?size=200',
};
var projects = [{
	'title':'foo',
	'dates':'foo',
	'description':'foo',
	'url':'foo',
	'images':[
		{
			'url':'foo',
			'small':'foo',
			'medium':'foo',
			'alt':'foo'
		}
	]
}]
var work = {
	'jobs':[
		{
			'employer':'Republic Equity',
			'title':'Startup Technologist',
			'dates':'01/2013 - present',
			'location':'Winter Park, FL',
			'description':'work'
		}]
	};
var education={
	'schools':[
		{
			'school':'University of Central Florida',
			'degree':'BFA Visual Arts',
			'year':'2003',
			'location':'Orlando, FL'
		},
		{
			'school':'Udacity',
			'degree':'ND Front End Developer',
			'year':'Current',
			'location':'Mountain View, CA'
		}],
	'onlineCourses':[
		{
			'title':'',
			'school':'',
			'dates':'',
			'url':''
		}]
	};
$('#header').append(HTMLheaderName)
	.append(HTMLskillsStart);
if(bio.skills.length > 0){
	bio.skills.forEach(
		function(d){
			$('#skills').append(
				 HTMLskills.replace('%data%',d));

		}
	);
}
//jobs in work
for(k in work.jobs){
	$('#workExperience').append(HTMLworkStart);
	$('.work-entry:last').append(
		HTMLworkEmployer.replace('%data%', work.jobs[k].employer) +
		HTMLworkTitle.replace('%data%', work.jobs[k].title)+
		HTMLworkDates.replace('%data%', work.jobs[k].dates)+
		HTMLworkLocation.replace('%data%', work.jobs[k].location)+
		HTMLworkDescription.replace('%data%', work.jobs[k].description));	
}
//projects
for(k in projects){
	$('#projects').append(HTMLprojectStart);
	var images = '';
	for(i in projects[k].images){
		images = images + HTMLprojectImage.replace('%data%', projects[k].images[i]);
	}
	$('.project-entry:last').append(
		HTMLprojectTitle.replace('%data%', projects[k].title)+
		HTMLprojectDates.replace('%data%', projects[k].dates)+
		HTMLworkDescription.replace('%data%', projects[k].description)+
		images);	
}


//$('#main').append(internationalizeButton);


/* some test values
$('#header').prepend(
	HTMLheaderName.replace('%data%', bio['name']) +
	'\n' +
	HTMLheaderRole.replace('%data%', bio['role']) +
	'\n' +
	HTMLcontactGeneric.replace('%contact%', 'contact info').replace('%data%', bio['contact info']) +
	'\n' +
	HTMLbioPic.replace('%data%', bio['picture URL']));
$('#workExperience').append(HTMLworkStart)
	.append(
		HTMLworkEmployer.replace('%data%', work['employer'])
	);
$('#education').append(HTMLschoolStart)
	.append(
		HTMLschoolName.replace('%data%', education[0].school)
	);
*/