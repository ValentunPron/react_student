import React from 'react'
import logo from '../../logo.svg';
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Menu = () => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img src={logo} alt="ss" width={50} height={50} />
					</Link>
					<Link to="/favorite">
						Favorite
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <Link to='about'>Mark Otto</Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}