import React, { FC, useState, ChangeEvent, MouseEvent, DragEvent, useRef } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const buttonClickHandler = (e: MouseEvent) => {
        console.log(`Controlled: ${value}`);
        console.log(`Uncontrolled: ${inputRef.current?.value}`);
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="controlled"
                value={value}
                onChange={inputChangeHandler}
            />
            <input 
                type="text"
                placeholder="uncontrolled"
                ref={inputRef}
            />
            <button
                onClick={buttonClickHandler}
            >
                Test Button
            </button>
            <div
                onDrag={dragHandler} 
                draggable
                style={{height: '200px', width: '200px', background: 'yellow', margin: '15px'}}
            >
            </div>
            <div 
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{height: '200px', width: '200px', background: isDrag ? 'orange' : 'yellow', margin: '15px'}}
            >
            </div>
        </div>
    )
}

export default EventsExample;