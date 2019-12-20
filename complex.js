var Complex = /** @class */ (function () {
    function Complex(realNumber, imaginaryNumber) {
        this.re = realNumber;
        this.im = imaginaryNumber;
    }
    Complex.prototype.add = function (complexNumber) {
        var re = this.re + complexNumber.re;
        var im = this.im + complexNumber.im;
        return new Complex(re, im);
    };
    Complex.prototype.toString = function () {
        console.log('re: ', this.re, ', im:', this.im);
    };
    return Complex;
}());
var c1 = new Complex(2, 4);
var c2 = new Complex(-4, 7);
var c3 = c1.add(c2);
c3.toString();
