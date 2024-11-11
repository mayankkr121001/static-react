

let isDown = false;
let startX;
let scrollLeft;

function slideMouseDown(e, slide) {
    isDown = true;
    startX = e.pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
}
function slideMouseLeave(slide) {
    isDown = false;
}
function slideMouseUp(slide) {
    isDown = false;
}
function slideMouseMove(e, slide) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slide.offsetLeft;
    const walk = (x - startX);
    slide.scrollLeft = scrollLeft - walk;
    //   console.log(walk);
}

export {slideMouseDown, slideMouseLeave, slideMouseUp, slideMouseMove}