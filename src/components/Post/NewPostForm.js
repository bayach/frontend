import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { isEmpty, timestampParser} from "../Utils";
import { addPost, getPosts } from "../../actions/post.actions";

function NewPostForm() {
    const userData = useSelector((state) => state.userReducer);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [postPicture, setPostPicture] = useState(null);
    const [file, setFile] = useState();
    const dispatch = useDispatch();

    const handlePost = async () => {
        if(message|| postPicture ){
                const data = new FormData();
                data.append('posterId', userData._id);
                data.append('message', message);
                if (file) data.append("image", file);
                        
                await dispatch(addPost(data));
                dispatch(getPosts());
                cancelPost();
    
        } else {
            alert("Veuillez entrer un message")
        }  
      };
    
      const handlePicture = (e) => {
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
      }; 

      const cancelPost = () => {
        setMessage("");
        setPostPicture("");
        setFile("");
      };


    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false);
    }, [userData,message])

  return (
    <> 
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <> 
        <div className="post-container">    
          <div className="post-form">
                <textarea
                name="message"
                id="message"
                placeholder="Quoi de neuf ?"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />


              {message || postPicture  ? (
              <li className="card-container">
                <div className="card-right">
                  <div className="card-header">
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    <img src={postPicture} alt="" />
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
                <div className="icon">
                  {(
                    <>
                      <img src="./img/icons/picture.svg" alt="img" />
                      <input
                        type="file"
                        id="file-upload"
                        name="picture"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => handlePicture(e)}
                      />
                    </>
                  )}
                </div>
                <div className="btn-send">
                {message || postPicture  ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
</div>
        </>
      )}
    
</>
  );
};

export default NewPostForm;