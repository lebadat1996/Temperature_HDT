let Temperature = function (c,f) {
    this.c=c;
    this.f=f;
    this.setDoC=function (c) {
        this.c = c;
    };
    this.setDoF=function (f) {
        this.f=f;
    };
    this.getDoC=function (c) {
        return this.c;
    };
    this.getDoF = function (f) {
            return this.f;
    };
    this.getconvert1 = function () {
        return this.c*1.8 +32;
    };
    this.getconvert2 = function () {
        return (this.f-32)/1.8;
    }
};
let temperature=new Temperature(25,30);
    console.log(temperature.getconvert1());
    console.log(temperature.getconvert2());
    temperature.setDoC(25);
    temperature.getDoC();
    temperature.setDoF(50);
    temperature.getDoF();
    console.log(temperature.getconvert1());
    console.log(temperature.getconvert2());

