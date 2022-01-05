const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('decorator', function(){

    let decorator
    let paint

    beforeEach (function() {
        decorator = new Decorator()
        paint = new Paint(10)
    })

    it('should be able to add paint stock', function(){
        decorator.addPaint(paint)
        const actual = decorator.paints
        assert.deepStrictEqual(actual, [paint])
    })
})