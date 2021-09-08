import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar';
import TodoDetail from './TodoDetail';
import brace from 'brace';
import AceEditor from 'react-ace';
import ContainerDimensions from 'react-container-dimensions';
import useAsync from './useAsync';
import { useDB, useNormalizedApi } from './db'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'brace/mode/json';
import 'brace/theme/monokai';
import { Context } from "./Context";

const drawerWidth = 360;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  appBar: {

  },
  toolbar: theme.mixins.toolbar,
  // toolbar: theme.Toolbar,

  contentAndToolbar: {
    flex: 3,
    minWidth: 320,
    boxSizing: 'border-box'
  },
  content: {
    // padding: theme.spacing(1),
    padding: theme.spacing.unit * 3,
    padding: 10,
    height: 'calc(100vh - 64px)',
    boxSizing: 'border-box',
  },
  storeInspectors: {
    height: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  storeInspector: {
    flex: 1,
    margin: 8,
    boxSizing: 'border-box'
  },
  storeInspectorHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#252620',
    color: 'rgba(255, 255, 255, .8)',
    height: 48
  },
  todoDetail: {
    height: 170
  }
});

const filterQueries = {
  'active': 'ACTIVE_TODOS',
  'all': 'ALL_TODOS',
  'completed': 'COMPLETED_TODOS'
}

function App(props) {
  let [context, setContext] = useContext(Context);
  if (context.status == "fulfilled") {
  console.log(context.value.status)
  }
  const { classes } = props;
  let [filter, setFilter] = useState('active');
  let [selectedTodoId, setSelectedTodoId] = useState();
  
  // const handleExitAuth = () => {
  //   setContext(false);
  // };

  let normalizedApi = useNormalizedApi()
  let db = useDB();
  console.log(db.entities.Todo)
  let [fetchTodosRequest, fetchTodos] = useAsync(normalizedApi.fetchTodos)


  useEffect(() => {
    fetchTodos(filter)
  }, [filter])

  let todos = db.executeStoredQuery(filterQueries[filter]);
  let todoIds = JSON.stringify(todos.map(t => t.id))

  useEffect(() => {
    setSelectedTodoId(todos[0] && todos[0].id)
  }, [todoIds])

  return (
    <div className={classes.root}>
      <Sidebar
        todos={todos}
        fetchTodosRequest={fetchTodosRequest}
        filter={filter}
        onFilterChange={setFilter}
        selectedTodo={selectedTodoId}
        onSelectedTodoChange={setSelectedTodoId}
      />
      <div className={classes.contentAndToolbar}>
        <AppBar position="relative" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Реестр УУ
            </Typography>
            <label className='authbut' onClick={() => setContext(false)}>Выход</label>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <div className={classes.todoDetail}>
            <TodoDetail id={selectedTodoId} />
          </div>
          <div className={classes.storeInspectors}>

          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
