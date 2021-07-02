let elem;
document.onmousedown = function(event) {
    if(event.target.dataset.goal === undefined) {
        return;
    }
    elem = event.target;
    elem.ondragstart = function() {
        return false;
    };
    //document.body.append(elem);
    let shiftX = event.clientX - elem.getBoundingClientRect().left;
    let shiftY = event.clientY - elem.getBoundingClientRect().top;
    document.addEventListener('mousemove', mouseMove);

    function mouseMove(event) {
        if(event.pageX > document.documentElement.clientWidth || event.pageX < 0 || event.pageY > document.documentElement.clientHeight || event.pageY < 0) {
            return;
        }

        elem.style.left = event.pageX - shiftX + 'px';
        elem.style.top = event.pageY - shiftY + 'px';
    }

    elem.addEventListener('mouseup', moveUp);
    function moveUp(event) {
        document.removeEventListener('mousemove', mouseMove);
        moveUp = null;
    }
}
