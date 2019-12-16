import React, { useState, useContext } from 'react';
import { ClockContext } from './Clock';

interface Props {
    
}

const Apple: React.FC<Props> = () => {
    const schedule = useContext(ClockContext);
    const [color, setColor] = useState('yellow');

    function onClick() {
        schedule(() => setColor('lightseagreen'));
    }

    return (
        <>
            <button style={{
                padding: '10px 20px',
                outline: 'none',
                borderRadius: '5px',
                backgroundColor: color
            }}
            onClick={onClick}>Change Color</button>
        </>
    );
}

export default Apple;