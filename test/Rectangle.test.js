
const assert = require('assert');
const Rectangle = require('../rectangle');


// give the test suite a label using describe
describe('rectangle', () => {

  
    it("returns false if it is not a square", () => {
      const rectangle2 = new Rectangle(10, 5);
      assert.strictEqual(rectangle2.isSquare(rectangle2), false);
    });

    it("returns true if it is a square", () => {
      const rectangle3 = new Rectangle(10, 10);
      assert.strictEqual(rectangle3.isSquare(rectangle3), true);
    });

    it("gets area", () => {
      const rectangle4 = new Rectangle(10, 10);
      assert.strictEqual(rectangle4.getArea(rectangle4), 100);
    });

    it("gets perimeter", () => {
      const rectangle5 = new Rectangle(10, 10);
      assert.strictEqual(rectangle5.getPerimeter(rectangle5), 40);
    });

  });