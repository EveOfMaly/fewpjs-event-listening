function addingEventListener() {
    const input = document.getElementById('input'); //the node that will be oing the listening. Store it in input
    input.addEventListener('click', function(event) { //evoke addeventlistener. event name is click and second argument is callbackfunction
    alert('I was clicked!');
});
}

addingEventListener();
