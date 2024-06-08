import React from 'react';

const ProductShiftNotice: React.FC = () => {
  return (
    <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md text-4xl" role="alert">
      <div className="flex">
        <div className="py-1">
          <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.683-1.36 3.449 0l5.356 9.515c.75 1.33-.213 2.986-1.724 2.986H4.624c-1.51 0-2.473-1.656-1.724-2.986l5.357-9.515zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-4a1 1 0 00-.993.883L9 10v2a1 1 0 001.993.117L11 12v-2a1 1 0 00-1-1z"/></svg>
        </div>
        <div>
          <p className="font-bold">Important Notice</p>
          <p className="text-2xl">
            Our product has shifted towards <span className="font-bold">InProp</span>. Please visit our new website at{' '}
            <a href="https://inprop.io" target="_blank" rel="noopener noreferrer" className="font-bold underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              inprop.io
            </a>{' '}
            for the latest updates and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShiftNotice;
