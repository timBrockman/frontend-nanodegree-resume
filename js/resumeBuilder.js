/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = 'Tim Brockman';
var role = 'Developer';
var bio = {
	'name': name,
	'role': role,
	'contacts':{
		'phone':'4076027721',
		'email':'tim@timbrockman.com',
		'github':'timBrockman',
		'twitter':'timBrockman',
		'location':'Celebration, FL'
	},
	'contact info':'tim@timbrockman.com',
	'picture URL':'https://en.gravatar.com/userimage/13176978/d79b43787e69587972a0f83404db17fa.jpg?size=200',
	'welcomeMessage':'lorem ipsum...',
	'skills':['eat','drink','sleep']
};
var work = [
	{
		'employer':'',
		'position':'',
		'years worked':'',
		'location':''
	}];
var education=[
	{
		'school':'',
		'years':'',
		'location':''
	}];

$('#header').prepend(
	HTMLheaderName.replace('%data%', bio['name']) +
	'\n' +
	HTMLheaderRole.replace('%data%', bio['role']) +
	'\n' +
	HTMLcontactGeneric.replace('%contact%', 'contact info').replace('%data%', bio['contact info']) +
	'\n' +
	HTMLbioPic.replace('%data%', bio['picture URL']));
 