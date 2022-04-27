import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../../utils";
import { BsChat } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";

import { LoginInfo } from "../../App";

const Navbar = () => {
  const login = useContext(LoginInfo);
  return (
    <Nav>
      <Imsta>
        <Link className="name" to="/">
          Imstagram
        </Link>
      </Imsta>
      <NavItems>
        {login ? (
          <>
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
          </>
        ) : (
          <>
            <NavItem>
              <Link className="link" to="chat">
                <BsChat size={30}></BsChat>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="user">
                <AiOutlineUser size={30}></AiOutlineUser>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="create">
                <IoCreateOutline size={30}></IoCreateOutline>
              </Link>
            </NavItem>
          </>
        )}
      </NavItems>
    </Nav>
  );
};

const Nav = styled(Box)`
  margin: 15px 0;
  display: flex;
  justify-content: space-around;
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
  .name {
    font-family: "Courgette", cursive;
  }
`;
export default Navbar;
