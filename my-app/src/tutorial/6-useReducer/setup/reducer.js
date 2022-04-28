export const reducer = (state, action) => {
  //console.log(state);
  // console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
    //console.log(state);
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please Enter a value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    console.log(action.payload);
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    // console.log(newPeople);
    return { ...state, people: newPeople };
  }
  throw new Error("no matching found");
};

export default reducer;
