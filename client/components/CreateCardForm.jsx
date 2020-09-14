import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


//----------- styling for form ---------------//
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: "rgb(248,248,255)"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  //--------dropdown menu styling--------//
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    backgroundColor: "rgb(248,248,255)"
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


//----------------- Form data -----------------------//

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
//--------------- Grabbing data from technologies state ------------//

const mapStateToProps = (state) => ({
  technologies: state.technologies,
})

//---------------Pushing a drop down menu option for each object in technologies array-----------//

// const techOptions = []
// for (let el of this.props.technologies)
// { techOptions.push(<OutlinedCard 
//   technologies={el}
// />)}

//--------------Form for creating a new card---------------//
function CreateCardForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="outlined-full-width"
          label="Error Message"
          style={{ margin: 8 }}
          // placeholder="Type in the problem"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <TextField
          id="outlined-full-width"
          label="Solution"
          style={{ margin: 8 }}
          // placeholder=""
          // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Link to Documentation"
          id="outlined-margin-none"
          // defaultValue="Paste url here"
          className={classes.textField}
          // helperText="Some important text"
          variant="outlined"
        />
        <Button color="inherit">Submit</Button>
      </div>
    </div>
  );
}

//---------------Drop down menu on form-------------------------//

function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  console.log("PROPS.TECHNOLOGIES", props)

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Technologies</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export {
  CreateCardForm,
  MultipleSelect,
}

export default connect(mapStateToProps)(MultipleSelect);