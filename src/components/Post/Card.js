import React, { useEffect,useState } from 'react';
import { dateParser, isEmpty } from "../Utils";
import { useDispatch,useSelector } from "react-redux";
import LikeButton from "./LikeButton";
import { updatePost } from "../../actions/post.actions";
import DeleteCard from "./DeleteCard";


const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true)
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };
  
 useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);
  
  return (
    <li className="card-container" key={post._id}>
    {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-right">
            <div className="card-header">
              <h3>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                          if (user._id === post.posterId) return user.email;
                          else return null;
                        }).join("")}
              </h3>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modification
                  </button>
                </div>
              </div>
            )}
            {(!(post.picture === "http://localhost:5000/pictures/undefined"))&& post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            
            <div className="card-footer">
              <LikeButton post={post} />
              <span>{dateParser(post.createdAt)}</span>
              {(userData._id === post.posterId || userData.role === "ADMIN" ) && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard id={post._id} />
              </div>             
              )}
              
            </div>
          </div>
            
            
         
        
          
        </>
      )}

    </li>
  );
}

export default Card;