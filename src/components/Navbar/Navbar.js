// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

const navbar = () => {
	return (
		<header>
			<ul id="headerButtons">
				<li className="navButton">
					<Link to="">Actividades</Link>
				</li>
				<li className="navButton">
					<Link to="">Sobre Nosotros</Link>
				</li>
				<li className="navButton">
					<Link to="">Contacto</Link>
				</li>
			</ul>
		</header>
	);
};

export default navbar;
