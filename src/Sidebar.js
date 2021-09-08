import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import AddTodoDialog from './AddTodoDialog';
import HashLoader from 'react-spinners/HashLoader';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";


const drawerWidth = 360;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    minWidth: drawerWidth,
    flex: 1,
    height: '100vh',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    position: 'relative'
  },
  tabRoot: {
    minWidth: 0,
    height: '100%'
  },
  tabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 64,
    top: 0
  },
  addTodoButton: {
    position: 'absolute',
    width: 64,
    height: '100%',
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabsFlexContainer: {
    height: '100%'
  }
});

const tabs = ['active', 'completed', 'all']

function Sidebar(props) {
  const { classes } = props;

  let [addTodoDialogOpen, setAddTodoDialogOpen] = useState(false);

  let [todos1, setTodos] = useState(props.todos);

  useEffect(() => {
    // console.log(7)
    // console.log(props.todos)

    setTodos(props.todos)
    }, [props.todos]);

    useEffect(() => {
      // console.log(todos1)
      // console.log(props.todos)
  
      // setTodos(props.todos)
      }, [todos1]);
  
  const openAddTodoDialog = () => setAddTodoDialogOpen(true)
  const closeAddTodoDialog = () => setAddTodoDialogOpen(false)

  const seach = (e) => {
    let mas = props.todos.filter(todo => todo.text[3].includes(e.target.value));
    if(mas.length>0)
    setTodos(mas);
    else if (e.target.value===""){
      setTodos(props.todos);
    } else if(mas.length==0){
      setTodos([]);
    }
  };


  return (
    <div className={classes.drawer}>
      <div className={classes.toolbar}>
        <Tabs
          value={tabs.indexOf(props.filter)}
          onChange={(e, i) => props.onFilterChange(tabs[i])}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          className={classes.tabs}
          classes={{ flexContainer: classes.tabsFlexContainer }}
        >
          <Tab label="В работе" classes={{ root: classes.tabRoot }} />
          <Tab label="В архиве" classes={{ root: classes.tabRoot }} />
          <Tab label="Все" classes={{ root: classes.tabRoot }} />

        </Tabs>
        <div className={classes.addTodoButton}>
          <IconButton onClick={openAddTodoDialog} color="primary" component="span">
            <AddIcon />
          </IconButton>
          <AddTodoDialog

            todos={todos1}

            open={addTodoDialogOpen}
            onCancel={closeAddTodoDialog}
            onSuccess={closeAddTodoDialog}
          />
        </div>
      </div>
      <Divider />

      <TextField
      style={{ width: 362, marginLeft:16, marginRight:16 }}
        label="Поиск"
        onChange={(e)=> seach(e)}
        InputProps={{   
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {props.fetchTodosRequest.pending && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
          <HashLoader size={30} />
        </div>
      )}

      {props.fetchTodosRequest.fulfilled && (
        <List>
          {todos1.map((todo, index) => (

            <ListItem
              button
              key={todo.id}
              onClick={(e) => props.onSelectedTodoChange(todo.id)}
            >

              <Typography
                variant="subtitle1"
                color={props.selectedTodo === todo.id ? 'secondary' : 'textPrimary'}
              >
                {`${todo.text[3]}, ${todo.text[4]}, ${todo.text[17]}, ${todo.text[16]}, ${todo.text[22]}`}
              </Typography>

            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

Sidebar.defaultProps = {

  onFilterChange: () => { },
};
export default withStyles(styles)(Sidebar);

// export default Sidebar;

