const initState = {
  user: []
  // user: axios
  //   .get("userStub.json")
  //   .then((response) => {
  //     // console.log(response.data);
  //     // this.setState({
  //     // response.data;
  //     // });
  //     // dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data});
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     // dispatch({type:'FETCH_USERS_REJECTED', payload:err});
  //   })
  // user: [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     age: 35,
  //     address: {
  //       street: "Kulas Light",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874"
  //     },
  //     phone: "1-770-736-8031 x56442",
  //     product: [
  //       {
  //         productId: 1,
  //         productCode: "Product1 - User 1",
  //         productNo: "PU1",
  //         expiryDate: "10/10/2018",
  //         manufacturer: "Man1",
  //         imgUrl: ""
  //       },
  //       {
  //         productId: 2,
  //         productCode: "Product2 - User 1",
  //         productNo: "PU2",
  //         expiryDate: "10/10/2018",
  //         manufacturer: "Man2",
  //         imgUrl: ""
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     age: 45,
  //     address: {
  //       street: "Kulas Light",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874"
  //     },
  //     phone: "1-770-736-8031 x56442",
  //     product: [
  //       {
  //         productId: 1,
  //         productCode: "Product1 - User 2",
  //         productNo: "PU1",
  //         expiryDate: "10/10/2018",
  //         manufacturer: "Man1",
  //         imgUrl: ""
  //       },
  //       {
  //         productId: 2,
  //         productCode: "Product2 - User 2",
  //         productNo: "PU2",
  //         expiryDate: "10/10/2018",
  //         manufacturer: "Man2U2",
  //         imgUrl: ""
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: "Clementine Bauch",
  //     age: 55,
  //     address: {
  //       street: "Kulas Light3",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874"
  //     },
  //     phone: "9874562656",
  //     product: [
  //       {
  //         productId: 1,
  //         productCode: "Product1 - User 3",
  //         productNo: "PU1",
  //         expiryDate: "10/10/2018",
  //         manufacturer: "Man1U3",
  //         imgUrl: ""
  //       },
  //       {
  //         productId: 2,
  //         productCode: "Product2 - User 3",
  //         productNo: "PU2",
  //         expiryDate: "10/10/2018",
  //         manufacturer: "Man2U3",
  //         imgUrl: ""
  //       }
  //     ]
  //   }
  // ]
};

const userReducer = (state = initState, action) => {
  console.log("userResucer", action);

  if (action.type === "GET_USER_DATA_AYNC") {
    let newState = action.val;

    return {
      ...state,
      user: newState
    };
  }
  return state;
};

export default userReducer;
