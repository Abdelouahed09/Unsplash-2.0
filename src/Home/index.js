import SearchAppBar from "../Components/NavBar";
import { useStyles } from "./style";

import { useState, useEffect, Fragment } from "react";
import { createApi } from "unsplash-js";
import { Box, Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import MediaCard from "../Components/Card";
import Animations from "../Components/Loading";

const HomePage = () => {
  const [data, setPhotosResponse] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsloading] = useState(true);

  const handleChange = (event, pageNumber) => {
    setPageNumber(pageNumber);
  };

  const api = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  useEffect(() => {
    api.search
      .getPhotos({
        query: search || "images",
        orientation: "landscape",
        perPage: 24,
        page: pageNumber,
      })
      .then((result) => {
        setPhotosResponse(result.response);
        setIsloading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setIsloading(false);
      });
  }, [pageNumber, search, api.search]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pageNumber]);

  const classes = useStyles();
  //console.log(data);

  return (
    <Fragment>
      <SearchAppBar setSearch={setSearch} searchValue={search} />
      <Container maxWidth="xl">
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Animations />
          </Box>
        ) : (
          <Box className={classes.root}>
            <Grid container spacing={2}>
              <Grid container item xs={12}>
                {data.results.map((item) => {
                  return (
                    <MediaCard
                      full_Link={item.urls.full}
                      key={item.id}
                      imagePath={item.urls.regular}
                      alt={item.alt_description}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        )}
        {data.total_pages > 1 && (
          <Box className={classes.root}>
            <Pagination onChange={handleChange} count={data.total_pages} />
          </Box>
        )}
      </Container>
    </Fragment>
  );
};

export default HomePage;
