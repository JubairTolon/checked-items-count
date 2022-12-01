import React, { useState } from 'react';

const SingleInput = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const sum = 0;

    const handleChange = event => {
        let value = event.target.value
        if (event.target.checked) {
            console.log('value:', value)
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
    };
    return (
        <div className='mb-2 w-full'>
            <label htmlFor="singleItemChecked">
                <input
                    className="accent-violet-500 mr-3 w-4 h-4"
                    type="checkbox"
                    value={isSubscribed}
                    onChange={handleChange}
                    name="singleItemChecked"
                />
            </label>
            <input
                onChange={handleChange}
                type="number"
                min='1'
                // value={deadline}
                // name="deadline"
                className='border-2 border-gray-300 rounded-md h-8 px-2 text-center font-semibold text-gray-700 focus:outline-none ' />
        </div>
    );
};

export default SingleInput;