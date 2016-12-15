let isDragging = false;

/* global document:true */
const draggable = (el, options) => {
    // start
    const onTouchStartHandle = event => {
        if(isDragging) return;

        document.onselectstart = () => false;
        document.ondragstart = () => false;

        isDragging = true;

        if(options.onDragStart) {
            event.preventDefault();
            options.onDragStart(event.changedTouches[0] || event.touches[0]);
        }
    };

    // move
    const onTouchMoveHandle = event => {
        options.onDrag(event.changedTouches[0] || event.touches[0]);
    };

    // end
    const onTouchEndHandle = event => {
        isDragging = false;

        document.onselectstart = null;
        document.ondragstart = null;

        if(options.onDragEnd) {
            options.onDragEnd(event.changedTouches[0] || event.touches[0]);
        }
    };

    el.addEventListener('touchstart', onTouchStartHandle);
    el.addEventListener('touchmove', onTouchMoveHandle);
    el.addEventListener('touchend', onTouchEndHandle);
    el.addEventListener('touchcancel', onTouchEndHandle);
};

export default draggable;
