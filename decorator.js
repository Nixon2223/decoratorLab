const Decorator = function(){
    this.paints = []
}

Decorator.prototype.addPaint = function(paint){
    this.paints.push(paint)
}

module.exports = Decorator