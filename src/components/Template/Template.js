import React, { Component } from "react";
import Header from "../Header/Header";
import "./Template.css";
import "./Template2.css";
import Navigation from "../Navigation/Navigation";
export default class Template extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/01.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">For those about to rock...</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-5 bg-black">
          <div className="container">
            <p className="m-0 text-center text-white small">
              Copyright &copy; Ryan and Olgy 2020
            </p>
          </div>
        </footer>
      </>
    );
  }
}
