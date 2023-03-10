import { useEffect, useRef } from "react";

export function useOnDraw(onDraw){
    const canvasRef = useRef(null);
    const isDrawingRef = useRef(false);

    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);

    const prevPointRef = useRef(null);

    useEffect(() => {
        return () => {
            // if(mouseMoveListenerRef.current){
            //     window.removeEventListener("mousemove", mouseMoveListenerRef.current);
            // }
            if(mouseUpListenerRef.current){
                window.removeEventListener("mouseup", mouseUpListenerRef.current);
            }
        }
    }, [])
    function setCanvasRef(ref){
        if(!ref) return;
        if(canvasRef.current){
            canvasRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);
        }
        canvasRef.current = ref;
        initMoveMouseListener(); 
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMoveMouseListener(){
        const mouseMoveListener = (e) => {
            if(isDrawingRef.current){
                const point = computePointInCanvas(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
                if(onDraw) onDraw(ctx, point, prevPointRef.current)
                prevPointRef.current = point;
            }
        }
        mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener("mousemove", mouseMoveListener);
    }

    function initMouseUpListener(){
        const listener = () => {
            isDrawingRef.current = false;
            prevPointRef.current = null; 
        }
        mouseUpListenerRef.current = listener;
        canvasRef.current.addEventListener("mouseup", listener);
    }

    function initMouseDownListener(){
        if(!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = true;
        }
        mouseDownListenerRef.current = listener;
        canvasRef.current.addEventListener("mousedown", listener);
    }

    function computePointInCanvas(clientX, clientY){
        if(canvasRef.current){
            const BoundingRect = canvasRef.current.getBoundingClientRect();
            return {
                x: clientX - BoundingRect.left,
                y: clientY - BoundingRect.top
            }
        } else {
            return null;
        }

    }

    return setCanvasRef; 
};