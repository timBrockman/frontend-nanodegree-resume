/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	'name': 'Tim Brockman',
	'role': 'Developer',
	'welcomeMessage':'Hello',
	'skills':[
		'eat',
		'drink',
		'sleep'],
	'contacts':{
		'phone':{'name':'407-602-7721','url':''},
		'email':{'name':'tim@timbrockman.com','url':'tim@timbrockman.com'},
		'github':{'name':'@timBrockman','url':'https://github.com/timBrockman'},
		'linkedin':{'name':'Tim Brockman','url':'https://www.linkedin.com/in/timbrockman'},
		'twitter':{'name':'@TimBrockman','url':'https://twitter.com/TimBrockman'},
		'location':['Celebration, FL', 'Winter Park, FL']
	},
	'contact info':'tim@timbrockman.com',
	'picture URL':'https://en.gravatar.com/userimage/13176978/d79b43787e69587972a0f83404db17fa.jpg?size=200',
	'display':displayBio
};
var projects = [{
		'title':'Static Search',
		'dates':'May 2015',
		'description':'TFIDF (Cosine similarity) search from static content written in Javascript.',
		'url':'https://github.com/timBrockman/static_search',
		'images':[
			{
				'url':'images/197x148.gif',
				'small':'foo',
				'medium':'foo',
				'alt':'foo'
			}
		]
	},{
		'title':'foo',
		'dates':'foo',
		'description':'foo',
		'url':'foo',
		'images':[
			{
				'url':'images/197x148.gif',
				'small':'foo',
				'medium':'foo',
				'alt':'foo'
			}
		]
	}
	]
	//

var work = {
	'jobs':[
		{
			'employer':'Republic Equity',
			'title':'Startup Technologist',
			'dates':'01/2013 - present',
			'location':'Winter Park, FL',
			'description':'work'
		}],
	'display': displayWork
	};
var education={
	'schools':[
		{
			'name':'University of Central Florida',
			'degree':'BFA Visual Arts',
			'dates':'Graduated 2003',
			'location':'Orlando, FL',
			'major':'Graphic Design'
		},
		{
			'name':'Udacity',
			'degree':'ND Front End Developer',
			'dates':'Current',
			'location':'Mountain View, CA',
			'major':'Front End Developer'
		}],
	'onlineCourses':[
		{
			'title':'',
			'school':'',
			'dates':'',
			'url':''
		}],
	'display':displayEducation
	};

//display bio
function displayBio(){
	$('#header').prepend(
		HTMLheaderName.replace(/%data%/g, bio['name']) +
		'\n' +
		HTMLheaderRole.replace(/%data%/g, bio['role']) +
		'\n' +
		HTMLbioPic.replace(/%data%/g, bio['picture URL']));

	var allContacts =
		'\n' +
		HTMLmobile.replace(/%data%/g, bio.contacts.phone.name).replace('%url%',bio.contacts.phone.url) +
		'\n' +
		HTMLemail.replace(/%data%/g, bio.contacts.email.name).replace('%url%',bio.contacts.email.url) +
		'\n' +
	//	HTMLtwitter.replace(/%data%/g, bio.contacts.twitter.name).replace('%url%',bio.contacts.twitter.url) +
	//	'\n' +
		HTMLgithub.replace(/%data%/g, bio.contacts.github.name).replace('%url%',bio.contacts.github.url) +
		'\n' +
		HTMLcontactGeneric.replace('%contact%', 'LinkedIn').replace(/%data%/g, bio.contacts.linkedin.name).replace('%url%',bio.contacts.linkedin.url);
	$('#topContacts').append(allContacts);
	$('#footerContacts').append(allContacts);
	if(bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);
		bio.skills.forEach(
			function(d){
				$('#skills').append(
					 HTMLskills.replace('%data%',d));
			}
		);
	}
}	
//jobs in work
function displayWork(){
	for(k in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(
			HTMLworkEmployer.replace('%data%', work.jobs[k].employer) +
			HTMLworkTitle.replace('%data%', work.jobs[k].title)+
			HTMLworkDates.replace('%data%', work.jobs[k].dates)+
			HTMLworkLocation.replace('%data%', work.jobs[k].location)+
			HTMLworkDescription.replace('%data%', work.jobs[k].description));	
	}
}
//projects
function displayProjects(){
	for(k in projects){
		$('#projects').append(HTMLprojectStart);
		var images = '';
		for(i in projects[k].images){
			images = images + HTMLprojectImage.replace('%data%', projects[k].images[i].url);
		}
		$('.project-entry:last').append(
			HTMLprojectTitle.replace('%data%', projects[k].title)+
			HTMLprojectDates.replace('%data%', projects[k].dates)+
			HTMLworkDescription.replace('%data%', projects[k].description)+
			images);	
	}
}	
//education
function displayEducation(){
	for(k in education.schools){
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(
			HTMLschoolName.replace('%data%', education.schools[k].name)+
			HTMLschoolDegree.replace('%data%', education.schools[k].degree)+
			HTMLschoolDates.replace('%data%', education.schools[k].dates)+
			HTMLschoolLocation.replace('%data%', education.schools[k].location)+
			HTMLschoolMajor.replace('%data%', education.schools[k].major)
		);
	}
}

$('#mapDiv').append(googleMap);

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