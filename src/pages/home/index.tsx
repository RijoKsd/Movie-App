import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import Layout from "../../Layout";
import { SetStateAction, useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommenedList = movies.filter((item) => item.isTrending !== true);
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
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
      {/* movie showing section */}
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            {/*  trending section */}
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending Movies
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>

            {/*  Recommended  section */}
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For you
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Content will be available soon
            </Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
