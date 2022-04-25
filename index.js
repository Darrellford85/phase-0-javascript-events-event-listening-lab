//Working these addevents //

function addingEventListener(){
    const input = document.getElementById('input');
    return input.addEventListener('click', function() {
        alert('Ouch, I was clicked!!!');

    });
}