var Node = function(props){
    if(props){
        for(key in props){
            if(props.hasOwnProperty(key)){
                this[key] = props[key];
            }
        }
    }
}
Node.prototype = {
    get: function(attribName){

        return  attribName === undefined ? this[attribName] : attribName;
    },

    set: function(attribName, val){
        if(attribName !== null && attribName !== undefined){
            this[attribName] = val;
        }
    }
}
