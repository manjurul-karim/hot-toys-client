import React from 'react';
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    return (
        <div>
            <h3> this is the section where i found my added toys</h3>
        </div>
    );
};

export default MyToys;