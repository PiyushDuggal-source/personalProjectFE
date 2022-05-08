import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../../utils";
import { BsChat } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { LoginInfo } from "../../App";
import { logoutMe } from "../../services/auth.services";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const login = useContext(LoginInfo);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const islogout = await logoutMe();
      const { data } = islogout;

      if (data.logout) {
        window.location.href = "/";
      }
      console.log(islogout);
    } catch (error: any) {
      console.log(error);
    }
    console.log("hello");
  };
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  console.log(login);
  return (
    <>
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
          {!login[0] ? (
            <>
              <NavItem>
                <motion.div
                  transition={spring}
                  initial={{ x: +200 }}
                  animate={{ x: 0 }}
                >
                  <Button
                    sx={{ fontFamily: "'kalam', cursive" }}
                    onClick={() => navigate("login")}
                    variant="text"
                  >
                    Login
                  </Button>
                </motion.div>
              </NavItem>
              <NavItem>
                <motion.div
                  transition={spring}
                  initial={{ x: +200 }}
                  animate={{ x: 0 }}
                >
                  <Link className="link" to="signup">
                    <Button
                      sx={{ fontFamily: "'kalam', cursive" }}
                      variant="text"
                    >
                      SignUp
                    </Button>
                  </Link>
                </motion.div>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link className="link" to="chat">
                  <Tooltip title="Chat" placement="bottom">
                    <motion.div
                      transition={spring}
                      initial={{ x: +200 }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <BsChat size={30}></BsChat>
                    </motion.div>
                  </Tooltip>
                </Link>
              </NavItem>
              <NavItem>
                <Tooltip title="Profile" placement="bottom">
                  <motion.div
                    transition={spring}
                    initial={{ x: +200 }}
                    animate={{ x: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <AiOutlineUser
                      onClick={() => navigate("/user")}
                      size={30}
                    ></AiOutlineUser>
                  </motion.div>
                </Tooltip>
              </NavItem>
              <NavItem>
                <Link className="link" to="create">
                  <Tooltip title="Create new Post" placement="bottom">
                    <motion.div
                      transition={spring}
                      initial={{ x: +200 }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <IoCreateOutline size={30}></IoCreateOutline>
                    </motion.div>
                  </Tooltip>
                </Link>
              </NavItem>
              <NavItem>
                <Tooltip title="Logout" placement="bottom">
                  <motion.div
                    transition={spring}
                    initial={{ x: +200 }}
                    style={{ color: "red", cursor: "pointer" }}
                    animate={{ x: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiLogOut onClick={() => logout()} size={30}></FiLogOut>
                  </motion.div>
                </Tooltip>
              </NavItem>
            </>
          )}
        </NavItems>
      </Nav>
    </>
  );
};

const Nav = styled(Box)`
  margin: 15px 0;
  display: flex;
  font-family: "Kalam", cursive;
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
