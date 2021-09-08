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

  let [todoText, setTodoText] = useState(
    [""]
  // {
  //   datess: "",
  //   dateapp: "",
  //   numapp: "",
  //   numcase: "",
  //   polic: "",
  //   tel: "",
  //   type: "",
  //   cert: "",
  //   pay: "",
  //   stao: "",
  //   fact: "",
  //   numpoli: "",
  //   franch: "",
  //   sumdam: "",
  //   sumcompen: "",
  //   datepay: "",
  //   mark: "",
  //   numauto: "",
  //   note: "",
  //   damlist: "",
  //   dateinsp: "",
  //   docorig: "",
  //   status: "",
  //   com1: "",
  //   com2: "",
  //   com3: "",
  // }
  )
  let [completed, setCompleted] = useState(false)

  let todo = db.executeQuery(queries.getTodoById(props.id))

  const updateTodo = () => {
    // console.log(777)
    // console.log(todoText)
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
let t;
  return (
    <div>
      {todo && (
        <div>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <TextField
                // placeholder="111"
                  value={todoText[0]}
                  onChange={(e) => {t = todoText, t[0]=e.target.value,  setTodoText(t)}}

                  // onChange={e => setTodoText(e.target.value)}
                  label="Дата СС"
                  fullWidth
                  margin="normal"
                />
                <TextField
                                // select={true}
                  value={todoText[1]}
                  onChange={(e) => {t = todoText, t[1]=e.target.value,  setTodoText(t)}}
                  label="Дата заявления"
                  fullWidth
                  margin="normal"
                />
                <TextField
                                // select={false}
                  value={todoText[2]}
                  // const td = {todoText[2]= e.target.value}
                  onChange={(e) => {t = todoText, t[2]=e.target.value,  setTodoText(t)}}
                  label="Номер обращения"
                  fullWidth={true}
                  margin="normal"
                />
                <TextField
                                // disabled={false}
                  value={todoText[3]}
                  onChange={(e) => {t = todoText, t[3]=e.target.value,  setTodoText(t)}}
                  label="Номер дела"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[4]}
                  onChange={(e) => {t = todoText, t[4]=e.target.value,  setTodoText(t)}}
                  label="Страхователь"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[5]}
                  onChange={(e) => {t = todoText, t[5]=e.target.value,  setTodoText(t)}}
                  label="Телефон клиента"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[6]}
                  onChange={(e) => {t = todoText, t[6]=e.target.value,  setTodoText(t)}}
                  label="ВИД страхования"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[7]}
                  onChange={(e) => {t = todoText, t[7]=e.target.value,  setTodoText(t)}}
                  label="Справка Да/НЕТ"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[8]}
                  onChange={(e) => {t = todoText, t[8]=e.target.value,  setTodoText(t)}}
                  label="Выплатник"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div class="col-sm">



                <TextField
                  value={todoText[9]}
                  onChange={(e) => {t = todoText, t[9]=e.target.value,  setTodoText(t)}}
                  label="СТОА"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[10]}
                  onChange={(e) => {t = todoText, t[10]=e.target.value,  setTodoText(t)}}
                  label="Направление/факт затрат"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[11]}
                  onChange={(e) => {t = todoText, t[11]=e.target.value,  setTodoText(t)}}
                  label="Серия/номер полиса"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[12]}
                  onChange={(e) => {t = todoText, t[12]=e.target.value,  setTodoText(t)}}
                  label="Франшиза"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[13]}
                  onChange={(e) => {t = todoText, t[13]=e.target.value,  setTodoText(t)}}
                  label="Примерная сумма ущерба"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[14]}
                  onChange={(e) => {t = todoText, t[14]=e.target.value,  setTodoText(t)}}
                  label="Сумма страхового возмещения"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[15]}
                  onChange={(e) => {t = todoText, t[15]=e.target.value,  setTodoText(t)}}
                  label="Дата выплаты"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[16]}
                  onChange={(e) => {t = todoText, t[16]=e.target.value,  setTodoText(t)}}
                  label="Марка ТС"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[17]}
                  onChange={(e) => {t = todoText, t[17]=e.target.value,  setTodoText(t)}}
                  label="Г/н"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div class="col-sm">


                <TextField
                  value={todoText[18]}
                  onChange={(e) => {t = todoText, t[18]=e.target.value,  setTodoText(t)}}
                  label="Примечание"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[19]}
                  onChange={(e) => {t = todoText, t[19]=e.target.value,  setTodoText(t)}}
                  label="Перечень повреждений"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[20]}
                  onChange={(e) => {t = todoText, t[20]=e.target.value,  setTodoText(t)}}
                  label="Дата осмотра"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[21]}
                  onChange={(e) => {t = todoText, t[21]=e.target.value,  setTodoText(t)}}
                  label="Оригиналы документов"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[22]}
                  onChange={(e) => {t = todoText, t[22]=e.target.value,  setTodoText(t)}}
                  label="Статус"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[23]}
                  onChange={(e) => {t = todoText, t[23]=e.target.value,  setTodoText(t)}}
                  label="Комментарии/дата комментария"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[24]}
                  onChange={(e) => {t = todoText, t[24]=e.target.value,  setTodoText(t)}}
                  label="Комментарии/дата комментария"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[25]}
                  onChange={(e) => {t = todoText, t[25]=e.target.value,  setTodoText(t)}}
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
          rows={2}
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
