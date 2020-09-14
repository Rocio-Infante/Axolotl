import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';
import { setAllCards } from './actions/action.js';
import * as actions from './actions/action.js';
import { connect } from 'react-redux';
import SignUp from './components/SignUp.jsx'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {CreateCardForm, MultipleSelect} from './components/CreateCardForm.jsx';

// import HomePage from './components/Homepage.jsx';

const mapStateToProps = (state) => ({
  cardList: state.cardList,
  newSearch: state.newSearch,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: () => dispatch(actions.fetchAllCards()),
  addCard: (id) => dispatch(actions.addCard(id)),
  updateNewSearch: (search) => dispatch(actions.addSearch(search)),
})


//-----------------styling -------------------//
const classes = {
  form: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  submitBtn: {
    marginLeft: 15,
    width: 70,
    height: 40,
    fontSize: 16,
    borderRadius: 15,
    color: "#6c6c6c",
    border: 0
   },
}

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

//-------------------Main Component-----------------------------//

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchAllCards();
  }

  // classes = useStyles();


  render() {
   // Window.pageYOffsetY > 200px
    const cards = []
    for (let el of this.props.cardList)
    { cards.push(<OutlinedCard 
      cardList={el}
    />)}
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            {/* <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <h1>Welcome!</h1>
                  <h1> Please Log In</h1>
                </Fragment>
              )}
            /> */}
            <Route exact path='/signin' component={SignIn} />
          </Switch>
          <br/>
          <br />
          <br />
          <br />
          <br />

          <Switch>
          <Link to='/new'>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon></AddIcon>}
            >
              New
            </Button>
            <Route exact path='/new' component={CreateCardForm} />
            <Route exact path='/new' component={MultipleSelect} />
          </Link>
          
          </Switch>

          <form 
        style={classes.form}
        // onSubmit={handleSubmit}
        >
        <label>
          <input
            style={{width: "450px", height:"40px", outline:"none", fontSize:"16px", borderRadius:"15px", border:'1px solid #6c6c6c', backgroundColor:"	rgb(248,248,255)"}}
            placeholder=" Search an error message "
            type="text"
            // value={}
            // onChange={e => setNewToDo(e.target.value)}
          />
           </label>
           <input
            style={classes.submitBtn}
            // ref={ref}
           type="submit" value="Search"/>
        </form>
       
          {cards}
          {/* <TemporaryDrawer /> */}
          {/* <Switch>
            <Route exact path='/user' component={LoginPage} />
            <OutlinedCard />
            <ButtonAppBar />
          </Switch> */}
          {/* <SignIn /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
