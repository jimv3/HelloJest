const dependency = require('./dependency');

class MyClass {
	doTheThing() {
		let d = new dependency("joe");
		return d.someProperty;
	}
}

module.exports = MyClass;
