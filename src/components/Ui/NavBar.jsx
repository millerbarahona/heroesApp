import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types';

export const Navbar = () => {

	const { user: { name, logged }, dispatch } = useContext(AuthContext);//para consumir el context de la aplicacion
	const history = useHistory();
	const handleLogout = () => {
		dispatch({
			type: types.logout
		});
		localStorage.removeItem('user');
		history.replace('/login');
	}
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container container-fluid">
				<Link
					className="navbar-brand"
					to="/"
				>
					HeroesApp
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/marvel"
						>
							Marvel
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/dc"
						>
							DC
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/search"
						>
							Search
						</NavLink>


					</div>
				</div>

				<div className="navbar-collapse collapse flex-row-reverse" >
					<ul className="navbar-nav ml-auto rigth">
						<span
							className="nav-item nav-link text-info mx-3"
						>
							{logged ? name : 'Perro'}
						</span>
						<button
							className="nav-item nav-lin btn btn-primary"
							onClick={handleLogout}
						>
							LogOut
						</button>

					</ul>
				</div>
			</div>
		</nav>
	)
}