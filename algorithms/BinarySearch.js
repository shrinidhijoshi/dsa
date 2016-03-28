(function(){
    function binarySearch(rootNode, val, comparator){
        if( comparator(rootNode.val, val) === 0){
            return rootNode;
        }else if(comparator(rootNode.val, val) > 0){
            return binarySearch(rootNode.left, val, comparator);
        }else{
            return binarySearch(rootNode.right, val, comparator);
        }


    var Algorithm = {
        binarySearch: function(rooNode, val, comparator) {

        }
    }

})()
