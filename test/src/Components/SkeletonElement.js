import React from 'react';

const SkeletonElement = ({type}) => {

    const classType = 'class'+type;

    return (
        <div className={classType}>
            
        </div>
    )
}
export default SkeletonElement;