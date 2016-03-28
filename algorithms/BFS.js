var queue = [];
var tree = {value: "a", children: [
    {value: "b",children: [
        {value: "d", children: [] },
        {value: "e", children: [] }]
    },
    {value: "c",children: [
        {value: "f", children: [] },
        {value: "g", children: [] }]
    },
]}
var bfs = function(node){
    queue.push(node);
    for (var i=0; i < queue.length; i++) {
        console.log(queue[i].value);
        queue[i].children.forEach(function(child){
            queue.push(child);
        });
    }
}
bfs(tree);
