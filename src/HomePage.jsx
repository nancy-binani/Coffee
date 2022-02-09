import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./useStyles";
const HomePage = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mock-api01.herokuapp.com/?query=moment`)
      .then((response) => {
        let arr = response.data.samples;
        arr = arr.slice(0, 10);
        setAPIData(arr);
      });
  }, []);
  const [keyward, setKeyward] = useState("moment");

  const handleClick = () => {
    axios
      .get(`https://mock-api01.herokuapp.com/?query=` + keyward)
      .then((response) => {
        let arr = response.data.samples;
        arr = arr.slice(0, 10);
        setAPIData(arr);
      });
  };

  const handleRemove = () => {
    setKeyward("");
  };
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.LogoWraper}>
          <div className={classes.logo}>
            <img
              src="https://eduemailshop.com/wp-content/uploads/2021/07/Tabnine-EduEmailShop.png"
              className={classes.imag}
              alt="header"
            />
          </div>
        </div>
        <div className={classes.searchWapper}>
          <div className={classes.SearchBarWrapper}>
            <SearchIcon />
            <input
              className={classes.inp}
              type="text"
              placeholder="Search your code snippet..."
              value={keyward}
              onChange={(e) => setKeyward(e.target.value)}
            ></input>
            <ClearIcon onClick={handleRemove} />
          </div>
        </div>

        <div className={classes.iconWrapper}>
          <Button variant="contained" onClick={handleClick}>
            Search
          </Button>
        </div>
      </div>
      <div className={classes.ser}>Your search results..</div>

      <div className={classes.content}>
        {APIData.length != 0 ? (
          APIData.map((i) => {
            return (
              <div className={classes.block}>
                <pre>
                  <code className="code">{i.code.full}</code>
                </pre>
                <hr></hr>
              </div>
            );
          })
        ) : (
          <div className={classes.center}>
            <CircularProgress color="secondary" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
