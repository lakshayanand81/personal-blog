
import React from 'react';
import Child from './Child';

const Parent = () => {
    const data = "Hello from Parent!";
    return (
        <div>
            <Child data={data} />
        </div>
    );
}

export default Parent;
