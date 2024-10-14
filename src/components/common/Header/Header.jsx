/* eslint-disable no-unused-vars */
import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Category from "@mui/icons-material/Category";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { auth } from "../../../firebase/config.js";
import { signOut } from "firebase/auth";
import SearchIcon from "@mui/icons-material/Search";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Stack from "@mui/material/Stack";
import { SignModal } from "../../common/index.js";

// custome hooks
import useCategories from "../../../hooks/useCategories";

// custome hooks
import useHeader from "../../../hooks/useHeader";
import styles from "./styles.module.css";

const { categoryButton } = styles;

function AppHeader() {
  const {
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    StyledBadge,
    pages,
    anchorElNav,
    anchorElUser,
    Search,
    SearchIconWrapper,
    StyledInputBase,
    cartProducts,
    user,
    handleClose,
  } = useHeader();

  const { loading, categories } = useCategories();

  return (
    <AppBar sx={{ color: "#1f2937", bgcolor: "#fff" }} position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* start first header */}
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* logo */}
          <Box sx={{ display: "flex", mr: 1 }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Our|Store
            </Typography>
          </Box>

          {/* search */}
          <Box>
            <Search sx={{ bgcolor: "#f3f5f9" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          {/* actions */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexGrow: 0,
            }}
          >
            <Tooltip title="Open">
              <Box sx={{ display: "flex",alignItems:"center" }}>
                {!user && <SignModal />}
                {/* user */}
                {user && (
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, ml: "25px" }}
                  >
                    <AccountCircleOutlined />
                  </IconButton>
                )}
                <IconButton sx={{ p: 0, ml: "15px", color: "white" }}>
                  <StyledBadge
                    badgeContent={cartProducts.length}
                    sx={{ color: "#1f2937" }}
                  >
                    <Link to="/cart">
                      <ShoppingCartOutlined sx={{ color: "#1f2937" }} />
                    </Link>
                  </StyledBadge>
                </IconButton>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  to
                  style={{ textAlign: "center", textDecoration: "none" }}
                >
                  <Button>Profile</Button>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Button
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                  }}
                  textAlign="center"
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {/* end first header */}

        {/* start second header */}
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* categories */}
          <Stack flexGrow={1} direction="row" spacing={2}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    className={categoryButton}
                    sx={{
                      width: "300px",
                      display: "flex",
                      justifyContent: "flex-start",
                      bgcolor: "#f6f9fc",
                      color: "#1f2937",
                      fontSize: "13px",
                      fontWeight: "bold",
                      position: "relative",
                    }}
                    variant="contained"
                    {...bindTrigger(popupState)}
                  >
                    <Category sx={{ mr: "15px" }} />
                    Categories
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    {loading === "succeeded" &&
                      categories.map((category) => {
                        return (
                          <Link
                            key={category.slug}
                            to={`/categories/products/${category.slug}`}
                            style={{ textDecoration: "none" }}
                          >
                            <MenuItem
                              sx={{
                                color: "#1f2937",
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                fontSize: "14px",
                                width: "330px",
                              }}
                              onClick={popupState.close}
                            >
                              {category.slug}
                            </MenuItem>
                          </Link>
                        );
                      })}
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Stack>
          {/* main menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#1f2937",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                <NavLink
                  to={`${page}`}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
        {/* end second header */}

        {/* start mobile  header */}
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* start  mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ width: "1200px", textTransform: "capitalize" }}
                >
                  <Typography textAlign="center">
                    <NavLink
                      to={`${page}`}
                      style={{
                        color: "#3f51b5",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* end  mobile menu */}

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* mobile  logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Our|Store
          </Typography>
          {/* end  Mobile layout */}

          {/* actions */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexGrow: 0,
            }}
          >
            <Tooltip title="Open">
              <Box sx={{ display: "flex",alignItems:"center" }}>
                {!user && <SignModal />}
                {/* user */}
                {user && (
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, ml: "25px" }}
                  >
                    <AccountCircleOutlined />
                  </IconButton>
                )}

                <IconButton sx={{ p: 0, ml: "15px", color: "white" }}>
                  <StyledBadge
                    badgeContent={cartProducts.length}
                    sx={{ color: "#1f2937" }}
                  >
                    <Link to="/cart">
                      <ShoppingCartOutlined sx={{ color: "#1f2937" }} />
                    </Link>
                  </StyledBadge>
                </IconButton>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  to
                  style={{ textAlign: "center", textDecoration: "none" }}
                >
                  <Button>Profile</Button>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Button
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                  }}
                  textAlign="center"
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {/* end mobile  header */}
      </Container>
    </AppBar>
  );
}
export default AppHeader;
