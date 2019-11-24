/* eslint-disable */
// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     count: 0
//   };

//   countUp = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   render() {
//     return (
//       <div className="Main">
//         <div>{this.state.count}</div>
//         <button onClick={this.countUp}>count Up!</button>
//       </div>
//     );
//   }
// }
// export dafault App;

import React from "react";

export default function Main({ advertises }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <table border="2">
            <colgroup>
              <col className="title" />
              <col className="content" />
              <col className="survey" />
              <col className="views" />
            </colgroup>
            <thead>
              <tr>
                <th width="440">Title</th>
                <th>content</th>
                <th>survey</th>
                <th>views</th>
              </tr>
            </thead>
            <tbody>
              {advertises &&
                advertises.map(advertise => (
                  <tr>
                    <td width="440">
                      <h2 className="advertise-title">
                        <a href="/">{advertise.title}</a>
                      </h2>
                    </td>
                    <td width="60">
                      <p className="advertise-content">{advertise.content}</p>
                    </td>
                    <td>
                      <p className="advertise-survey">{advertise.survey}</p>
                    </td>
                    <td>{advertise.views}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div
            class="fb-like"
            data-href="http://localhost:3000/"
            data-width=""
            data-layout="button"
            data-action="like"
            data-size="small"
            data-show-faces="false"
            data-share="false"
          ></div>
        </div>
      </div>
    </div>
  );
}
