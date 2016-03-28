var Stack = function(){};
Stack.prototype = {
    top: 0,
    _stack:[],
    push: function(obj){
        this._stack.push(obj);
        top++;
    },
    pop: function(){
        this._stack.pop();
    },
    size: function(){
        return top;
    }
}
