const Paint = function (litres){
    this.litres = litres

}

Paint.prototype.checkEmpty = function (){
    return this.litres === 0
}

Paint.prototype.removePaint = function (amount){
    this.litres -= amount 
}
module.exports = Paint