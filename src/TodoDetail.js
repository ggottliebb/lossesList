import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDB, useNormalizedApi, queries } from './db'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function TodoDetail(props) {
  const { classes } = props

  let normalizedApi = useNormalizedApi()
  let db = useDB();

  let [todoText, setTodoText] = useState('')
  let [completed, setCompleted] = useState(false)

  let todo = db.executeQuery(queries.getTodoById(props.id))

  const updateTodo = () => {
    normalizedApi.updateTodo(props.id, {
      text: todoText,
      completed: completed
    })
  }

  const deleteTodo = () => {
    normalizedApi.deleteTodo(props.id)
  }

  let todoId = todo ? todo.id : null

  useEffect(() => {
    if (todo) {
      setTodoText(todo.text)
      setCompleted(todo.completed)
    }
  }, [todoId])

  return (
    <div>
      {todo && (
        <div>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <TextField
                  value={todoText[0]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Дата СС"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[1]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Дата заявления"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[2]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Номер обращения"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[3]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Номер дела"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[4]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Страхователь"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[5]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Телефон клиента"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[6]}
                  onChange={e => setTodoText(e.target.value)}
                  label="ВИД страхования"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[7]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Справка Да/НЕТ"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[8]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Выплатник"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div class="col-sm">



                <TextField
                  value={todoText[9]}
                  onChange={e => setTodoText(e.target.value)}
                  label="СТОА"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[10]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Направление/факт затрат"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[11]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Серия/номер полиса"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[12]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Франшиза"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[13]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Примерная сумма ущерба"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[14]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Сумма страхового возмещения"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[15]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Дата выплаты"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[16]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Марка ТС"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[17]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Г/н"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div class="col-sm">


                <TextField
                  value={todoText[18]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Примечание"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[19]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Перечень повреждений"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[20]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Дата осмотра"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[21]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Оригиналы документов"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[22]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Статус"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[23]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Комментарии/дата комментария"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[24]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Комментарии/дата комментария"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[25]}
                  onChange={e => setTodoText(e.target.value)}
                  label="Комментарии/дата комментария"
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
          </div>


          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
            }
            label="В архив"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={updateTodo}
            className={classes.button}
          >
            Обновить
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={deleteTodo}
            className={classes.button}
          >
            Удалить
          </Button>
        </div>
      )
      }
    </div >
  );
}

TodoDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoDetail);
