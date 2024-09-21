import React, { useState } from "react";
import "./DropDown.css"; // Import the CSS file

const Dropdown = ({groupBy,setGroupBy,sortBy,setSortBy}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img src="icons_FEtask\Display.svg"/>Display
        <span>
            <ArrowDownIcon height={16} width={16}/>
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <div
            className="dropdown-item"
          >
            <label>Grouping</label>
            <select onChange={(e) => {setGroupBy(e.target.value)}} value={groupBy}>
            
              <option value="user">User</option>
              <option value="priority">Priority</option>
              <option value="status">Status</option>
            </select>
          </div>
          <div
            onChange={(e) => {setSortBy(e.target.value)}}
            value={sortBy}
            className="dropdown-item"
          >
            <label>Ordering</label>
            <select onChange={() => {}}>
            <option value="title">Title</option>
              <option value="priority">Priority</option>
              
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

const ArrowDownIcon = (props) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      width={props.width || '22'} 
      height={props.height || '22'} 
      fill={props.fill || 'currentColor'} 
      {...props} 
    >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>
  );
export default Dropdown;
