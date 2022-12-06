import React, { useState } from 'react';

const SingleInput = ({ item, handleChange, checked }) => {
    const [i, setI] = useState('')

    const handleInput = event => {
        setI(event.target.value)
    }

    return (
        <div className='flex items-center mb-2 w-full input-field'>
            <label className='flex items-center' htmlFor="singleItemChecked">
                <input
                    className="accent-violet-500 mr-3 w-4 h-4 check-input"
                    type="checkbox"
                    name="singleItemChecked"
                    checked={checked}
                    onChange={handleChange}
                />Item: {item.id}
            </label>
            <input
                className='num-input border-2 border-gray-300 rounded-md h-8 px-2 text-center font-semibold ml-1 text-gray-700 focus:outline-none'
                onChange={handleInput}
                type="number"
                min='1'
                value={i}
            />
        </div>
    );
};

export default SingleInput;