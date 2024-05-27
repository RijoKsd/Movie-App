import { Link, useLocation } from "react-router-dom";

import { Box, Hidden, Typography } from "@mui/material";
 
 import { FaHome } from "react-icons/fa";
 import { MdMovie } from "react-icons/md";
 import { GiFilmSpool } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa6";



const navLinks = [
  {
    name: "Home",
    icon: <FaHome />,
    link: "/",
  },

  {
    name: "movies",
    icon: <MdMovie />,
    link: "/movies",
  },
  {
    name: "Tc Series",
    icon: <GiFilmSpool />,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon:<FaRegBookmark />,
    link: "/bookmarks",
  },
];

const Sidebar = () => {
   const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        // backgroundColor:"#ffffff",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            ls: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            PikaShowApp
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: 0,
              ls: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {/*  Loop the link */}
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box 
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              style={{filter: `${pathname === item.link ? "invert(58%) sepia(100%) saturate(748%) hue-rotate(179deg) brightness(94%) contrast(88%)" : "none"}`}}
              >
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:2}}>
                  
                  {item.icon}
                  <Hidden mdDown>
                    <Typography> {item.name}</Typography>
                  </Hidden>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
