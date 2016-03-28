var req = new Jsonp(url, function () {
    //random shit;
});


req.fetch();

"abc.com?callback=c"
 c(data);

 <script src="abc.com?callback=c">
 c(data);
 </script>


 Jsonp = function (url, callback) {

     window.c = function () {
         callback();
         delete window.c;
     }
     this.fetch: function () {
         var scriptTag = document.createElement('script');
         scriptTag.src = url+ "callback=c";
         document.head.appendChild(scriptTag);

    }

 }


A = function(){
    if(A.count === undefined ){
        A.count =0;
    }
    A.count++;

    this.instanceCount: function () {
        return A.count;
    }
}


A = function () {
    var count = 0;
    return function(){
        count++;
        this.instanceCount = funct ion () {
            return count;
        }
    }
}();
