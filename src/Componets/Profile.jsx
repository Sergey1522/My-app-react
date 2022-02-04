import React from "react";
import Posts from "./Posts";
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <div className="mypost">
            <input type="text" />
            <button>Add Post</button>
            </div>
            
            <Posts name="Sergey:" messages="Hello World!"/>
            
        </div>
    );
}

export default Profile;