import React from "react";
import { connect } from "react-redux";
// import { Container } from "react-bootstrap";

const Home = ({ count, increment, decrement }) => {
  return (
    <div style={{ maxWidth: "600px", marginLeft: "400px" }}>
      <div className="p-5 d-flex flex-column align-items-center border border-3 border-dark rounded-3 justify-content-center">
        <h1>Counter App via Redux</h1>
        <hr />
        <span className="fs-3">The count Initial state value is : {count}</span>

        <h2>
          <button
            type="button"
            className="btn btn-sm btn-success fs-1"
            onClick={increment}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger fs-1 ms-5"
            onClick={decrement}
          >
            -
          </button>
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
