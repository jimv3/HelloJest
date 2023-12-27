'use strict';

const myClass = require('../../business/myclass');
jest.mock('../../business/dependency');
const dependency = require('../../business/dependency');
dependency.mockImplementation(() => {
	return {
		someProperty: 'bill'
	}
});
describe("Test 'myclass'", () => {
	let classUnderTest = new myClass();
	describe("Test 'myClass.logIt' action", () => {
		it("should return with 'bill'", async () => {
			const res = classUnderTest.doTheThing();
			expect(res).toBe('bill');
		});
	});

});
