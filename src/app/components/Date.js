import * as React from 'react';


const BasicDatePicker = () => {
  return (
    <div className='font-normal time flex text-xs'>
    {new Date().toLocaleString() + ""}
    </div>
  );
}

export default BasicDatePicker;