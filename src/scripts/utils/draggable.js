import { getTranslate } from './translate';

/* global document:true */
const draggable = (el, options) => {
    let prevTranslateX,
        prevTranslateY,
        dragState = {
            dragging: false,
            effectEl: options.effectEl || el,
        };

    // start
    const onTouchStartHandle = (event, sourceEvent) => {
        if(dragState.dragging) return;

        let translate = getTranslate(dragState.effectEl);

        Object.assign(dragState, {
            startTimestamp: new Date(),
            pageX: event.pageX,
            pageY: event.pageY,
            translateX: translate.x,
            translateY: translate.y,
        });

        document.onselectstart = () => false;
        document.ondragstart = () => false;

        if(options.onDragStart) options.onDragStart(dragState, sourceEvent);
    };

    // move
    const onTouchMoveHandle = (event, sourceEvent) => {
        let deltaX = event.pageX - dragState.pageX,
            deltaY = event.pageY - dragState.pageY,
            translateX = dragState.translateX + deltaX,
            translateY = dragState.translateY + deltaY,
            velocityTranslateX = translateX - prevTranslateX || translateX,
            velocityTranslateY = translateY - prevTranslateY || translateY;

        prevTranslateX = translateX;
        prevTranslateY = translateY;
        Object.assign(dragState, {
            dragging: true,
            velocityTranslateX,
            velocityTranslateY,
        });

        if(options.onDrag) {
            options.onDrag({
                ...dragState,
                deltaX,
                deltaY,
                translateX,
                translateY,
            }, sourceEvent);
        }
    };

    // end
    const onTouchEndHandle = (event, sourceEvent) => {
        Object.assign(dragState, {
            dragging: false,
        });

        document.onselectstart = null;
        document.ondragstart = null;

        if(options.onDragEnd) options.onDragEnd(dragState, sourceEvent);

        // reset
        dragState = {
            dragging: false,
            effectEl: options.effectEl || el,
        };
    };

    el.addEventListener('touchstart', event => onTouchStartHandle(event.changedTouches[0] || event.touches[0], event));
    el.addEventListener('touchmove', event => onTouchMoveHandle(event.changedTouches[0] || event.touches[0], event));
    el.addEventListener('touchend', event => onTouchEndHandle(event.changedTouches[0] || event.touches[0], event));
    el.addEventListener('touchcancel', event => onTouchEndHandle(event.changedTouches[0] || event.touches[0], event));
};

export default draggable;
