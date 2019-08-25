import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";

export default function NavBar() {
	return (
		<>
			<Navbar
				bg="dark"
				variant="dark"
				collapseOnSelect
				expand="lg"
				className="mb-3"
			>
				<Navbar.Brand>
					<Link to="/" className="navbar-brand">
						LyricsGenius
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link to="/about/" className="nav-link">
							About
						</Link>
					</Nav>
					<Search />
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
