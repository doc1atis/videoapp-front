import React, { Component } from "react";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import { connect } from "react-redux";

class Posts extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="panel panel-default widget col-12">
            <div className="panel-heading">
              <div className="mt-2">
                <AddPost />
              </div>
              <h3 className="panel-title ">Recent Comments</h3>
              {this.props.posts ? (
                this.props.posts.map((post, i) => <Post key={i} post={post} />)
              ) : (
                <div>No Posts</div>
              )}
            </div>
            <div className="panel-body">
              <ul className="list-group"></ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
