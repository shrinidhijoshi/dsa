var mixin = function(src, dest){
    for(var prop in dest){
        if(dest.hasOwnProperty(prop)){
            src[prop] = dest[prop];
        }
    }
}

var OOPS = {
    declare : function(baseClasses, props){

        var newClass = function(){},
        prototype = {};

        for(var key in props){
            if(props.hasOwnProperty(key) && key === "constructor"){
                newClass = props[key];
                break;
            }
        }

        if(baseClasses && Array.isArray(baseClasses)){
            baseClasses.forEach(function(baseClass){
                mixin(prototype, baseClass);
            });
        }else if(typeof baseClasses === "object"){
            mixin(prototype, baseClasses);
        }

        newClass.prototype = Object.create(prototype);
        newClass.prototype.constructor = newClass;

        mixin(newClass.prototype, props);

        newClass.prototype.super = function(){
            for(var i=0; i< baseClasses.length; i++){
                baseClasses[i].prototype.constructor.apply(this, Array.prototype.slice.call(arguments));
            }
        }

        return newClass;
    }
}

A = OOPS.declare(Object,{
    constructor: function(){
        console.log("A:const");
    },
    m: function(){
        console.log("A:m()");
    }
});
B = OOPS.declare(Object,{
    constructor: function(){
        console.log("B:const");
    },
    m: function(){
        console.log("B:m()");
    }
});
C = OOPS.declare([B, A], {
    constructor: function(args){
        console.log("C:const");
        this.super(args);
    },
    t: function(){
        console.log("C:m()");
    }

});


c = new C({a:1});
c.m();
