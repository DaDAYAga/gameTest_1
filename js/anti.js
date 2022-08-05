function consoleOpenCallback() {
    window.location.href="./html";
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

$(document).keyup(function(event) {
    if (event.which == 123) {
        window.location.href="./html";
    }
});