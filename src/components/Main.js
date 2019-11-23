/* eslint-disable */
import React from "react";

export default function Main({ advertises }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div id="fb-root"></div>
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
        </div>
      </div>
    </div>
  );
}
