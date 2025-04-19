import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  TextField,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./WelcomePage.css"; // Import the CSS file

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      isMobile: window.innerWidth <= 600,
    };
  }

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 600 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { anchorEl, isMobile } = this.state;
    const navLinks = (
      <>
        <MenuItem onClick={this.handleMenuClose}>Upload</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Explore</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>About</MenuItem>
      </>
    );

    return (
      <div>
        {/* AppBar for Navigation */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="app-title">
              VideoHub
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={this.handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleMenuClose}
                >
                  {navLinks}
                </Menu>
              </>
            ) : (
              <Box className="nav-links">
                <Typography variant="button">Upload</Typography>
                <Typography variant="button">Explore</Typography>
                <Typography variant="button">About</Typography>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        {/* Welcome Section */}
        <Container maxWidth="md" className="welcome-container">
          <Typography variant="h2" component="h1" className="welcome-text">
            Welcome to VideoHub
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            className="search-bar"
            InputProps={{
              style: { borderRadius: "25px" },
            }}
          />
        </Container>
      </div>
    );
  }
}

export default WelcomePage;