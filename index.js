function callback(name) {
    return name + 'everyone'
}

function receivesAFunction(function1) {
    function1() 
}

function returnsANamedFunction() { 
    return function functionDan() {
        console.log('dan')
}

}

function returnsAnAnonymousFunction() {
    return function(){
        console.log('no name')
    }
}