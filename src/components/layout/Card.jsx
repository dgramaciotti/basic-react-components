import React from "react";
import './Card.css';
export default (props) => {

const styles = {
    backgroundColor: props.color || "#ce3331",
    borderColor: props.color || "#ce3331"
}    
return <div className="card" style={styles}>
    <div className="title">{props.title}</div>
    <div className="content">{props.children}</div>
</div>;
};
