export const getUserData = () => {
  console.log("action called");
  return {
    type: "GET_USER_DATA"
  };
};

export const getUserDataEdit = (id) => {
  console.log("edit action called", id);

  return {
    type: "GET_USER_DATA_BY_ID",
    id
  };
};
