import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({ history }) => { // history es una prop que nos da react router dom
  const { dispatch } = useContext(AuthContext);

  const [formValues, handleInputChange, reset] = useForm({
    name: ''
  })

  const { name } = formValues;

  const handleLogin = () => {
    //history.push('/'); // push es para enviar a otra pagina 
    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: name
      }
    });

    history.replace(lastPath); //replace es para reemplazar en la hsitoria del navegador

  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form >
        <input
          name="name" type="text"
          placeholder="Ingresa tu nombre"
          className="form-control"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}
