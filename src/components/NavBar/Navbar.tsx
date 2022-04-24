import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../../utils";
import { BsChat } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <Nav>
      <Imsta>
        <Link to="/">Imstagram</Link>
      </Imsta>
      <NavItems>
        <NavItem>
          <Button variant="text">
            <Link className="link" to="login">
              Login
            </Link>
          </Button>
        </NavItem>
        <NavItem>
          <Button variant="text">
            <Link className="link" to="signup">
              SignUp
            </Link>
          </Button>
        </NavItem>
        <NavItem>
          <Link to="inbox">
            <BsChat size={30}></BsChat>
          </Link>
        </NavItem>
        <NavItem>
          <Link className="link" to="user">
            <AiOutlineUser size={30}></AiOutlineUser>
          </Link>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

const Nav = styled(Box)`
  margin: 15px 0;
  display: flex;
  justify-content: space-around;

  .link {
    color: #90caf9;
    text-decoration: none;
    font-family: "Kalam", cursive;
  }
`;

const NavItems = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavItem = styled(Box)`
  margin: 0 0.8rem;
`;

const Imsta = styled(Box)`
  text-decoration: underline;
  background: linear-gradient(60deg, #e21143, #ffb03a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
`;
export default Navbar;
