import { Box, InputAdornment, InputBase, Paper } from "@mui/material";
import Layout from "../../Layout";
import { SetStateAction, useState } from "react";
import { CiSearch } from "react-icons/ci";


const Home = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            value={search}
            onChange={handleSearch}
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
             }}
            startAdornment={
              <InputAdornment position="start">
                <CiSearch 
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                  }}
                
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      
    </Layout>
  );
};

export default Home;
