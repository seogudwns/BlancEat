import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Navbar, Row, Col, Button, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import LoginPage from '../component/user/LoginPage';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	background-color: #075f3a;
`;

const StyledLogo = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	max-width: 200px;
	cursor: pointer;
`;

const StyledNav = styled.nav`
	flex: ${props => (props.flex ? props.flex : 0)};
	display: flex;
	justify-content: ${props => (props.jc ? props.jc : 'none')};
	align-items: center;
	list-style: none;
	color: #fcfbfa;
`;

const StyledButton = styled.button`
	width: 120px;
	height: 35px;
	background: transparent;
	border-radius: 5px;
	border: 1px solid #fcfbfa;
	color: #fcfbfa;
	font-size: 1rem;
	cursor: pointer;
`;

const StyledList = styled.li`
	font-size: 1rem;
	margin-left: 30px;
	visibility: ${props => (props.visibility ? props.visibility : 'visible')};
	cursor: pointer;
`;

const StyledHeaderContainer = styled(Container)`
	color: #ffffff;
	background-color: #075f3a;
	.nav-link {
		font-family: 'Roboto', sans-serif;
		color: #ffffff !important;
	}
`;

/*

	.navbar.scrolling-navbar.top-nav-collapse {
		background: #ff0000;
	}
	.navbar-toggler {
		color: #ffffff;
		background: #ff0000;
	}
*/

const Header = () => {
	const isLogin = true;

	const openLoginModal = () => {
		// ModalActive={true} => modalActive
		return <LoginPage ModalActive={true} />;
	};

	const createLink = (url, title) => {
		return (
			<Link to={url} style={{ textDecoration: 'none', color: '#fcfbfa' }}>
				{title}
			</Link>
		);
	};

	return (
		<StyledHeaderContainer fluid>
			<Navbar collapseOnSelect expand="md" color="white">
				<Container>
					<Navbar.Brand href="/">
						<img src="/balanceatLogo.png" />
					</Navbar.Brand>{' '}
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Nav className="me-auto"> </Nav>
					<Nav>
						<Navbar.Collapse id="navbar-dark responsive-navbar-nav">
							<Nav className="me-auto"></Nav>
							<Nav>
								<Nav.Link href="/">메인페이지</Nav.Link>
								<Nav.Link href="/balanceat">BalancEat</Nav.Link>
								<Nav.Link href="/recommand">오늘 뭐 먹지?</Nav.Link>
								{isLogin ? (
									<Nav.Link href="/userpage">사용자페이지</Nav.Link>
								) : (
									<Nav visibility="hidden">사용자페이지</Nav>
								)}
							</Nav>
						</Navbar.Collapse>

						<Button onClick={openLoginModal} style={{ marginLeft: '1em' }}>
							Sign in
						</Button>
					</Nav>
				</Container>
			</Navbar>
		</StyledHeaderContainer>
	);
};

export default Header;

/*
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
*/
/*
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
*/
/*
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
*/

/*
			<StyledHeaderContainer fluid>

<Navbar>
					<Container>
						<Navbar.Brand href="/">
							<img src="/balanceatLogo.png" />
						</Navbar.Brand>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">메인페이지</Nav.Link>
								<Nav.Link href="/balanceat">BalancEat</Nav.Link>
								<Nav.Link href="/recommand">오늘 뭐 먹지?</Nav.Link>

								{isLogin ? (
									<Nav.Link href="/userpage">사용자페이지</Nav.Link>
								) : (
									<StyledList visibility="hidden">사용자페이지</StyledList>
								)}
								<Button onClick={openLoginModal}>Sign in</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
							</StyledHeaderContainer>

*/

/*
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
*/

/*
	<StyledHeaderContainer fluid>
			<Navbar>
				<Sdiv>
					<Navbar.Brand href="/">
						<img src="/balanceatLogo.png" />
					</Navbar.Brand>
				</Sdiv>
				<Sdiv>
					<SNav.Link href="/">메인페이지</SNav.Link>
					<SNav.Link href="/balanceat">BalancEat</SNav.Link>
					<SNav.Link href="/recommand">오늘 뭐 먹지?</SNav.Link>

					{isLogin ? (
						<SNav.Link href="/userpage">사용자페이지</SNav.Link>
					) : (
						<StyledList visibility="hidden">사용자페이지</StyledList>
					)}
					<Button onClick={openLoginModal}>Sign in</Button>
				</Sdiv>
			</Navbar>
		</StyledHeaderContainer>
 
 */
