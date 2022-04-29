import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../../utils";
import { BsChat } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { LoginInfo } from "../../App";

const Navbar = () => {
  const login = useContext(LoginInfo);
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  return (
    <Nav>
      <motion.div
        transition={spring}
        whileHover={{ rotateX: 360, scale: 1.2 }}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
      >
        <Imsta>
          <Link className="name" to="/">
            Imstagram
          </Link>
        </Imsta>
      </motion.div>
      <NavItems>
        {!login ? (
          <>
            <NavItem>
              <motion.div
                transition={spring}
                initial={{ x: +200 }}
                animate={{ x: 0 }}
              >
                <Button variant="text">
                  <Link className="link" to="login">
                    Login
                  </Link>
                </Button>
              </motion.div>
            </NavItem>
            <NavItem>
              <motion.div
                transition={spring}
                initial={{ x: +200 }}
                animate={{ x: 0 }}
              >
                <Button variant="text">
                  <Link className="link" to="signup">
                    SignUp
                  </Link>
                </Button>
              </motion.div>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <Link className="link" to="chat">
                <motion.div
                  transition={spring}
                  initial={{ x: +200 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <BsChat size={30}></BsChat>
                </motion.div>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="user">
                <motion.div
                  transition={spring}
                  initial={{ x: +200 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <AiOutlineUser size={30}></AiOutlineUser>
                </motion.div>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="create">
                <motion.div
                  transition={spring}
                  initial={{ x: +200 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <IoCreateOutline size={30}></IoCreateOutline>
                </motion.div>
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
