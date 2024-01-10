import React from "react";


export default function NewsItem(props) {
  return (
    <div>
      <div className="card my-2 " style={{ "overflow-x": "hidden" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{props.source}</span>
        </div>
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text" style={{ fontWeight: "bold" }}>
            {props.author} - Author
          </p>

          <a href={props.url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">
            {new Date(props.time).toGMTString()}
          </small>
        </div>
      </div>
    </div>
  );
}
