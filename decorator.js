const Decorator = function(){
    this.paints = []
}

Decorator.prototype.addPaint = function(paint){
    this.paints.push(paint)
}

Decorator.prototype.totalPaint = function(){
    let total = 0
    for (paint of this.paints){
        total += paint.litres
    }
    return total
}

Decorator.prototype.enoughPaint = function (room){
    return this.totalPaint() >= room.area
}

module.exports = Decorator