import React, { Component } from "react";
import UserDetails from "../Userdetail/userDetails";
import Accordion from "../../Components/Accordion/accordion";
import Button from "../../Components/Button/button";
import axios from "axios";
import { connect } from "react-redux";
import { getUserData, getUserDataEdit } from "../../actions/userAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    const UserList = user.length ? (
      user.map((u) => {
        return (
          <div className="row m-1 border-bottom border-warning" key={u.id}>
            <div className="col-sm-9  ">
              <div className="">
                <h4 className="font-weight-bold">User Details</h4>
                <UserDetails user={u} />
              </div>

              <div className="">
                <h4 className="font-weight-bold">Product Details</h4>
                {u.product.length ? (
                  u.product.map((p) => (
                    <div key={p.productId}>
                      <Accordion product={p} />
                    </div>
                  ))
                ) : (
                  <div>No Product</div>
                )}
              </div>
            </div>
            <div className="col-sm-3   mb-1 ">
              <Button
                text="Edit"
                onClick={() => {
                  this.props.getUserDataEdit(u.id);
                }}
              />
              {/* <button
                onClick={() => {
                  this.props.getUserDataEdit(u.id);
                }}
              >
                Edit
              </button> */}
            </div>
          </div>
        );
      })
    ) : (
      <div>No users</div>
    );
    return (
      <div className="container ">
        <h1 className="text-center border-bottom border-dark">Dashboard</h1>
        <div>{UserList}</div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    user: state.user.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUserData()),
    getUserDataEdit: (id) => dispatch(getUserDataEdit(id))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Dashboard);
