import React from "react";
import Thread from "../components/Thread";
import NewPostForm from "../components/Post/NewPostForm";



const Home = () => {

  return (
    <div className="home">
      <div className="main">
        <div className="home-header">
          {  <NewPostForm /> }
        </div>
          <Thread />
      </div>
    </div>
  );
};

export default Home;