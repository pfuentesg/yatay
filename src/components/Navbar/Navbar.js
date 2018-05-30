import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
	return (
		<header>
			<ul id="headerButtons">
				<li className="navButton">
					<Link to="/">Actividades</Link>
				</li>
				<li className="navButton">
					<Link to="hometwo">Sobre Nosotros</Link>
				</li>
				<li className="navButton">
					<Link to="">Contacto</Link>
				</li>
			</ul>
		</header>
	);
};

export default navbar;
