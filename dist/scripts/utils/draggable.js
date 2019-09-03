import _extends from 'babel-runtime/helpers/extends';
import { getTranslate } from './translate';

var draggable = function draggable(el, options) {
    var prevTranslateX = void 0,
        prevTranslateY = void 0,
        dragState = {
        dragging: false,
        effectEl: options.effectEl || el
    };

    var onTouchStartHandle = function onTouchStartHandle(event, sourceEvent) {
        if (dragState.dragging) return;

        var translate = getTranslate(dragState.effectEl);

        _extends(dragState, {
            startTimestamp: new Date(),
            pageX: event.pageX,
            pageY: event.pageY,
            translateX: translate.x,
            translateY: translate.y
        });

        document.onselectstart = function () {
            return false;
        };
        document.ondragstart = function () {
            return false;
        };

        if (options.onDragStart) options.onDragStart(dragState, sourceEvent);
    };

    var onTouchMoveHandle = function onTouchMoveHandle(event, sourceEvent) {
        var deltaX = event.pageX - dragState.pageX,
            deltaY = event.pageY - dragState.pageY,
            translateX = dragState.translateX + deltaX,
            translateY = dragState.translateY + deltaY,
            velocityTranslateX = translateX - prevTranslateX || translateX,
            velocityTranslateY = translateY - prevTranslateY || translateY;

        prevTranslateX = translateX;
        prevTranslateY = translateY;
        _extends(dragState, {
            dragging: true,
            velocityTranslateX: velocityTranslateX,
            velocityTranslateY: velocityTranslateY
        });

        if (options.onDrag) {
            options.onDrag(_extends({}, dragState, {
                deltaX: deltaX,
                deltaY: deltaY,
                translateX: translateX,
                translateY: translateY
            }), sourceEvent);
        }
    };

    var onTouchEndHandle = function onTouchEndHandle(event, sourceEvent) {
        _extends(dragState, {
            dragging: false
        });

        document.onselectstart = null;
        document.ondragstart = null;

        if (options.onDragEnd) options.onDragEnd(dragState, sourceEvent);

        dragState = {
            dragging: false,
            effectEl: options.effectEl || el
        };
    };

    el.addEventListener('touchstart', function (event) {
        return onTouchStartHandle(event.changedTouches[0] || event.touches[0], event);
    });
    el.addEventListener('touchmove', function (event) {
        return onTouchMoveHandle(event.changedTouches[0] || event.touches[0], event);
    });
    el.addEventListener('touchend', function (event) {
        return onTouchEndHandle(event.changedTouches[0] || event.touches[0], event);
    });
    el.addEventListener('touchcancel', function (event) {
        return onTouchEndHandle(event.changedTouches[0] || event.touches[0], event);
    });
};

export default draggable;