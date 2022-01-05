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

    describe('Paint', function(){

        let room
        beforeEach (function(){
            const paint2 = new Paint(10)
            const paint3 = new Paint(5)
            const paint4 = new Paint(5)
            decorator.addPaint(paint2)
            decorator.addPaint(paint3)
            decorator.addPaint(paint4)
            room = new Room(20)
        })
    
    it('should return total litres of paint', function(){
        const actual = decorator.totalPaint()
        assert.strictEqual(actual, 20)
    })

    it('should calculate if enough paint', function(){
        const actual = decorator.enoughPaint(room)
        assert.strictEqual(actual, true)
    })

    it('should paint room if enough paint', function(){
        decorator.paintRoom(room)
        assert.strictEqual(decorator.totalPaint(), 0)
        assert.strictEqual(room.painted, true)
    })


    })
})