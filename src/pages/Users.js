import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faHouse, faUser, faFile } from '@fortawesome/free-solid-svg-icons';

function Users() {
    const token = localStorage.getItem('token');
    console.log(token);
  
    // Estado para almacenar la lista de usuarios
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
          const response = await axios.get(
            'https://ujed-api.onrender.com/api/users?order_by=created_at&order=desc&limit=5',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUsers(response.data);
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
      }, []); // La lista de depend
    
      return (
        <div className="dashboard-container">
              <div className="sidebar">
        <img className='logo' src='https://lh5.googleusercontent.com/proxy/DG7wQT5MyXoK68d6vCp5s2V7Lxm5_-mDz7j8Ym29tgxP9gY70qy4JoG4tcRYwIe72foKCfEF'/>  
        <nav>
          <ul>
            <li>
              <Link to={'/Home'}><FontAwesomeIcon icon={faHouse} className="burger-icon"/></Link>
            </li>
            <li>
              <Link to={'/Users'}><FontAwesomeIcon icon={faUser} className="burger-icon"/></Link>
            </li>
            <li>
              <Link to={'/Reports'}><FontAwesomeIcon icon={faFile} className="burger-icon"/></Link>
            </li>
            <li className='cerrar'>
              <Link to={'/'}><FontAwesomeIcon icon={faRightFromBracket} className="burger-icon"/></Link>
            </li>
          </ul>
        </nav>
      </div>
        <h1 className='main-title'>Usuarios</h1>
        <div className="user-list">
          <h2 className='title'>Lista de Usuarios</h2>
          <div className="table-container">
          <table>
              <thead className='title-t'>
                <tr className='header'>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Creado</th>
                  <th>Actualizado</th>
                </tr>
              </thead>
              <tbody className='body'>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.roles.join(', ')}</td>
                    <td>{new Date(user.created_at).toLocaleString()}</td>
                    <td>{new Date(user.updated_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
    };
    
export default Users
