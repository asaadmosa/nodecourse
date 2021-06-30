
function calculator(a,b){
    this.a=a;
    this.b=b;
}

calculator.prototype.add = function () {
    return this.a + this.b;
}
calculator.prototype.sub= function (){
    return this.a - this.b;
}

calculator.prototype.mult= function (){
    return this.a * this.b;
}

calculator.prototype.log= function (){
    console.log('a+b = '+this.add() + ' a-b=' + this.sub() + ' a*b = '+ this.mult());
}

var c1=new calculator(5,10);
var c2=new calculator(8,11);
var c3=new calculator(6,11);

c1.log();
c2.log();

setTimeout(function() {
    c3.log();
},2000);