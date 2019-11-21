/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

export default function Main({ advertises, getNextPage }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {advertises &&
            advertises.map(advertise => (
              <div className="advertise-preview">
                <table border="2" />
                <thead>
                  <td>제목</td>
                  <td>내용</td>
                  <td>설문</td>
                  <td>조회수</td>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="advertise-title">{advertise.title}</h2>
                    </td>
                    <td>
                      <p className="advertise-content">{advertise.content}</p>
                    </td>
                    <td>
                      <p className="advertise-survey1">{advertise.survey1}</p>
                    </td>
                    <td>{advertise.views}</td>
                  </tr>
                </tbody>
              </div>
            ))}
          <div className="clearfix">
            <button
              type="button"
              className="btn btn-primary float-right"
              onClick={() => {
                getNextPage();
              }}
            >
              Older advertises &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
