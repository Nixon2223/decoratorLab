const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){

    let paint

    beforeEach(function(){
        paint = new Paint(10)
    })

    it('should have litres of paint', function(){
        const actual = paint.litres
        assert.strictEqual(actual, 10)
    })
    it('should return if not empty', function(){
        const actual = paint.checkEmpty()
        assert.strictEqual(actual, false)
    })

    it('should return if empty', function(){
        paint.litres = 0
        const actual = paint.checkEmpty()
        assert.strictEqual(actual, true)
    })

    it('should be able to remove paint', function(){
        paint.removePaint(5)
        const actual = paint.litres
        assert.strictEqual(actual, 5)
    })

})