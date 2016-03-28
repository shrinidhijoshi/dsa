var Promise = function(){}
Promise.prototype = {
    state: "UNFULFILLED",
    s_cbs: [],
    r_cbs: [],
    constructor: function(exec){
        // exec(this.resolve, this.reject);
    },
    resolve: function(val){
        if(val instanceof Promise && typeof val.then === "function"){
            val.then(function(val){
                this.state = "RESOLVED";
                this.s_cbs.forEach(function(cb){
                    cb.call(null, val);
                });
            }.bind(this));
        }else{
            this.state = "RESOLVED";
            this.s_cbs.forEach(function(cb){
                cb.call(null, val);
            });
        }

    },

    reject: function(){
        this.state = "REJECTED";
        this.r_cbs.forEach(function(cb){
            cb.call(null, val);
        });
    },

    then: function (s_cb, r_cb) {

        var returnPromise = new Promise();
        if(s_cb){
            this.s_cbs.push(function(val){
                returnPromise.resolve(s_cb(val));
            });
        }

        if(r_cb){
            this.r_cbs.push(function(val){
                returnPromise.resolve(r_cb(val));
            });
        }

        return returnPromise;

    }
};



var hotel1 = {
    saltFetched: function(val){
        console.log("Hotel1: Got the salt! :) => ", val);
    }
}

var hotel2 = {
    saltFetched: function(val){
        console.log("Hotel2: Got the salt! :) => ", val);
    }
}

var SaltKart = function(promise){
    this.saltPromise = promise;
}

SaltKart.prototype = {
    // registerForSaltService: function(cb){
    //     this.saltFectchedCallbacks.push(cb);
    // },
    //
    // onSaltFetched: function(){
    //     //calling the net to get somthign
    //     this.saltFectchedCallbacks.forEach(function(saltFectchedCallback){
    //         saltFectchedCallback.call(null, salt);
    //     });
    // },
    //
    // goFetchSalt: function(){
    //     setTimeout(function(){
    //         this.onSaltFetched();
    //     }.bind(this), 5000);
    // },
    //

    /* Promise */
    goFetchSalt: function(){
        console.log("Started fetching salt....");
        var saltPromise = new Promise();
        setTimeout(function(){
            saltPromise.resolve("salt");
        }.bind(this), 2000);
        return saltPromise;
    }

};

/* main */


var saltKart = new SaltKart(promise);
var promise = saltKart.goFetchSalt();;

promise.then(hotel1.saltFetched);
promise.then(hotel2.saltFetched);




// saltKart.registerForSaltService(hotel1.saltFetched);
// saltKart.registerForSaltService(hotel2.saltFetched);
