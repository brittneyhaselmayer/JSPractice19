//prototype
// .__proto__
let person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function () {
		return this.firstname + ' ' + this.lastname;
	},
};

let britt = {
	firstname: 'Brittney',
	lastname: 'Haselmayer',
};

console.log(person.getFullName());

// will show properties on object and whats inhereted from other objects
for (var prop in britt) {
	// console.log(prop + ':' + britt[prop]);
}
// will show only properties in the object not whats inherited from other objects
for (var prop in britt) {
	if (britt.hasOwnProperty(prop)) {
		console.log(prop + ':' + britt[prop]);
	}
}

///////////////////////////////function constructors////////////////////////////////////////
///// function name is capitalized, "this" points to the new empty obj "new" keyword sets up.

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

let mike = new Person('mike', 'wix');
let b = new Person('Brittney', 'Haze');
console.log(mike, b);

//above is building new objects with the object function constructor with the new keyword

Person.prototype.getFormalName = function () {
	return this.lastname + ', ' + this.firstname;
};

console.log(mike.getFormalName());

//above is adding a property to the person object builder, any object built by this builder will have access
//to the new property due to all the objects built pointing to the same prototype.
