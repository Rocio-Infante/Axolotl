import * as types from '../constants/actionTypes';

const initialState = {
    loggedIn: false,
    cardList: [],
    currentUser: '',
    newSearch: '',
    newProblem: '',
    newSolution: '',
    newDocLink: '',
    technologies: [
        { name: "React", id: "1"},
        { name: "Redux", id: "2"},
        { name: "Express", id: "3"},
        { name: "Javascript", id: "4"},
        { name: "MongoDB", id: "5"},
    ],
}

const reducer = (state = initialState, action) => {
    let cardList;

    switch (action.type) {
        case types.SET_ALL_CARDS:
            const newCards = [...action.payload]

            return {
                ...state,
                cardList: newCards,
            }

        case types.ADD_CARD:
            

            const newCard = {
               ...action.payload
            }

            cardList = state.cardList.slice();
            cardList.push(newCard);

            return {
                ...state,
                cardList: cardList,
            }

        case types.SET_NEW_SEARCH:
            return {
                ...state,
                newSearch: action.payload,
            }

        default:
          return state;
    }

}
export default reducer;