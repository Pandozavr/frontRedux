import React from 'react';

export const InputFile = (props) => {
    return (
        <div>
            <label> {props}
                <input style={{display:'none'}} type="file"/>
            </label>
        </div>
    );
};