import React from "react";
import "./Home.css";
import Data from "./Data.json";
import Bill from "./Bill";
import { useState } from "react";
function Home(props) {
  const [post, setPost] = useState(null);
  const setClick = (post) => {
    props.select(post);
  };
  return (
    <div className="home">
      {Data.map((post) => {
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
  );
}

export default Home;
