import React, { Component } from "react";
import Moment from "react-moment";

export default class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="row col-11 offset-1 mb-1">
        <div className="col-xs-2 col-md-1 mr-1">
          <img
            src="http://placehold.it/80"
            className="img-circle img-responsive"
            alt=""
          />
        </div>
        <div className="col-xs-10 col-md-10">
          <div>
            {/* <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn">
                          Cool Sign Up
                        </a> */}
            <div className="mic-info">
              By: <a href="#">{comment.owner.username}</a> on{" "}
              <a href="#">
                <Moment format="DD MMM YYYY" date={comment.createdAt} />
              </a>
            </div>
          </div>
          <div className="comment-text">{comment.body}</div>
          <div className="action">
            {/* <button
                          type="button"
                          className="btn btn-primary btn-xs"
                          title="Edit"
                        >
                          <span className="glyphicon glyphicon-pencil"></span>
                        </button> */}
            {/* <button
                          type="button"
                          className="btn btn-success btn-xs"
                          title="Approved"
                        >
                          <span className="glyphicon glyphicon-ok"></span>
                        </button> */}
            {/* <button
                          type="button"
                          className="btn btn-danger btn-xs"
                          title="Delete"
                        >
                          <span className="glyphicon glyphicon-trash"></span>
                        </button> */}
          </div>
        </div>
      </div>
    );
  }
}
