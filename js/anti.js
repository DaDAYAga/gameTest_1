function consoleOpenCallback() {
        
}
!function () {

    const handler = setInterval(() => {
        const before = new Date();

        debugger;

        const after = new Date();

        const cost = after.getTime() - before.getTime();

        if (cost > 100) {

            consoleOpenCallback();

            clearInterval(handler)

        }
    },1000)

}();