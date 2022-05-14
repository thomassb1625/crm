import React, {useState} from 'react';
import logo from './logo.png';


export default function LoginForm() {

    const selected = "bg-cyan-600 text-gray-800 font-bold py-2 px-8 rounded-full";
    const notSelected = "bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-8 rounded-full";
    
    const [admin, setAdmin] = useState(1);
    const [adminProps, setAdminProps] = useState(selected);
    const [employeeProps, setEmployeeProps] = useState(notSelected);
    const [inName, setInName] = useState("Admin");
 
    const handleAdminClick = (event) => {
        event.preventDefault();
        setAdmin(1);
        setAdminProps(selected);
        setEmployeeProps(notSelected);
        setInName("Admin")
        console.log(admin);
    }

    const handleEmployeeClick = (event) => {
        event.preventDefault();
        setAdmin(0);
        setAdminProps(notSelected);
        setEmployeeProps(selected);
        setInName("Employee")
        console.log(admin);
    }

    const handleLoginClick = (e) => {
      e.preventDefault();
    }
    
    return (
      <div className='grid grid-cols-1 place-items-center'>
        <img className = 'pt-16' src={logo} alt="Lindox Equipment"></img>
        <form className="bg-white shadow-lg rounded pt-16 px-8 pb-8 mb-4">
          <div className = 'flex-row'>
            <div className='inline-flex mb-2 border-2 border-gray-500 rounded-full'>
              <button className={adminProps} onClick={handleAdminClick}>
                Admin Login
              </button>
              <button className={employeeProps} onClick={handleEmployeeClick}>
                Employee Login
              </button>
            </div>
            <div className = 'mb-2'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={inName + " Username"}/>
            </div>
            <div className = 'mb-2'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={inName + " Password"}/>
            </div>
            <div className = 'flex justify-center'>
              <button className="bg-cyan-600 text-white font-bold py-2 px-8 rounded-full" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );  
}