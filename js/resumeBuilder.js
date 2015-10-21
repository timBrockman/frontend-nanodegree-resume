/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = 'Tim Brockman';
 var role = 'Developer';
 var bio = {
 	'name': name,
 	'role': role,
 	'contact info':'tim@timbrockman.com',
 	'picture URL':'https://en.gravatar.com/userimage/13176978/d79b43787e69587972a0f83404db17fa.jpg?size=200'
 };

 $('#header').prepend(
 	HTMLheaderName.replace('%data%', bio['name']) +
 	'\n' +
 	HTMLheaderRole.replace('%data%', bio['role']) +
 	'\n' +
 	HTMLbioPic.replace('%data%', bio['picture URL']));
 