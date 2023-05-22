import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CameraIcon from "@mui/icons-material/CameraOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./style";

export default function SearchAppBar(props) {
  const { searchValue, setSearch } = props;

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const resetSearchValue = () => {
    setSearch("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", backgroundColor: "#001" }}
      >
        <Toolbar>
          <CameraIcon
            onClick={resetSearchValue}
            sx={{ fontSize: "40px", cursor: "pointer", margin: "0 5px 0 10px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              padding: "0 20px",
            }}
          >
            GALLERY APP
          </Typography>
          <Search sx={{ marginLeft: "10px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={handleChangeSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
