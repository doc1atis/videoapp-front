import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "../Comment/Comment";
import Moment from "react-moment";

class Post extends Component {
  state = {
    comments: []
  };

  render() {
    let comments = <h1>No Comments</h1>;

    console.log(this.props);

    let { post } = this.props;

    if (this.state.comments) {
      comments = this.state.comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ));
    }
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-2 col-md-1">
            <img
              src="http://placehold.it/80"
              className="img-circle img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-10 col-md-11">
            <div>
              {/* <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn">
                          Cool Sign Up
                        </a> */}
              <div className="mic-info">
                By: <a href="#">{post.owner.username}</a> on{" "}
                <a href="#">
                  <Moment format="DD MMM YYYY" date={post.createdAt} />
                </a>
                {/* 11 Nov 2013 */}
              </div>
            </div>
            <div className="comment-text">{post.body}</div>
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
        {comments}
      </li>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
