import React, { Component } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";

class Posts extends Component {
  state = {
    posts: [1, 1]
  };
  render() {
    let posts = <div>No Posts</div>;

    if (this.state.posts) {
      posts = this.state.posts.map((post, i) => {
        return <Post key={i} post={post} />;
      });
    }

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="panel panel-default widget">
            <div className="panel-heading">
              <span className="glyphicon glyphicon-post"></span>
              <h3 className="panel-title">Recent Posts</h3>
              {posts}
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
