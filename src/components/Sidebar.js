import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/Home">Dashboard</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/reportes">Reportes</Link>
        </li>
        <li>
            
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
