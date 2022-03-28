(function() {
    let i = 0;
    let newFunc = function() {
        console.log(i);
        i++
        if (i <= 100) {
            newFunc();
        }
    }
    newFunc();
})();

