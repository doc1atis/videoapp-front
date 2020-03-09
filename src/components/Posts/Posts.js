import React, { Component } from "react";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import { connect } from "react-redux";

class Posts extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    console.log("posts cdm ", this.props.posts);
  }
  componentDidUpdate() {
    console.log("posts cdu ", this.props.posts);
  }

  render() {
    let posts = <div>No Posts</div>;

    console.log("render");

    if (this.props.posts) {
      posts = this.props.posts.map((post, i) => {
        console.log("cur post ", post.comments);
        return <Post key={i} post={post} />;
      });
      console.log(posts);
    }

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="panel panel-default widget col-12">
            <div className="panel-heading">
              <div className="mt-2">
                <AddPost />
              </div>
              <h3 className="panel-title ">Recent Comments</h3>
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

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isAuth: state.authReducer.isAuth
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
