import React, { useEffect } from "react";
import "./Home.css";
import Data from "./Data.json";
import Bill from "./Bill";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
function Home(props) {
  const [post, setPost] = useState(null);
  const setClick = (post) => {
    props.select(post);
  };
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(
      Data.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, post]);

  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header_optionBasket">
            <MenuIcon />
            <span
              className="header_optionLineTwo
        header_basketCount"
            ></span>
          </div>
        </Link>

        <input
          className="header_searchInput"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="home">
        {filteredData.map((post) => {
          return (
            <div key={post.id}>
              <img
                src={post.image}
                className="home_image"
                onClick={() => {
                  setClick(post);
                }}
              />

              <p className="image_container"> {post.title} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
