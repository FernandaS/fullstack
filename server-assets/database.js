var friends = [

{
	name: "Flavia",
	age: 28,
	yearMet: 2000
},

{
	name: "Mayra",
	age: 34,
	yearMet: 2006
},
{
	name: "Gaby",
	age: 27,
	yearMet: 2004
}

];

module.exports.getFriends = function(){
	return friends;
};

module.exports.addFriends = function(friendObj){
	friends.push(friendObj)
};

// var family = [

// {
// 	name: "Romilce",
// 	age: 50,
// 	relation: "Mother"
// },
// {
// 	name: "Marcio",
// 	age: 31,
// 	relation: "Brother"
// }



// ]