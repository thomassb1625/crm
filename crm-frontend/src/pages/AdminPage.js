import React, { useState } from 'react';
import logo from './logo.png';

export default function AdminPage() {

    const [reportFilter, setReportFilter] = useState('Customer');

    const handleChange = (e) => {
        setReportFilter(e.target.value)
    }

    return (
        <div className='grid grid-cols-1 place-items-center'>
            <img className = 'pt-14' src={logo} alt="Lindox Equipment"></img>
            <form className="bg-white shadow-lg rounded pt-2 px-8 pb-8 mb-4">
                <h1 className = 'text-gray-600 font-bold'>
                    Select Items For Report Generation
                </h1>
                <div className='flex justify-center mb-2'>
                    <label class="block mt-4">
                        <span class="text-gray-700">Filter Report By</span>
                        <select class="form-select mt-1 block w-full" 
                        onChange = {handleChange}>
                            <option value = 'Customer'>Customer</option>
                            <option value = 'Sales Rep'>Sales Rep</option>
                            <option value = 'Factory'>Factory</option>
                            <option value = 'Item'>Item</option>
                        </select>
                    </label>
                </div>
                <div className='flex justify-center mb-2'>
                    <label class="block mt-4">
                        <span class="text-gray-700">Select {reportFilter}(s)</span>
                    </label>
                </div>
            </form>
            <button className="bg-cyan-600 text-white font-bold py-2 px-8 rounded-full">
                Generate Report
            </button>
        </div>
    );
}
