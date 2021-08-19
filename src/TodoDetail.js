import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDB, useNormalizedApi, queries } from './db'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhoneInput from 'react-phone-input-2'
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function TodoDetail(props) {
  const { classes } = props

  let normalizedApi = useNormalizedApi()
  let db = useDB();

  const [open, setOpen] = React.useState({
    cert: false,
    type: false,
    pay: false,
    docorig: false
  });

  let [todoText, setTodoText] = useState(
    [""]
  )
  let [completed, setCompleted] = useState(false)

  let todo = db.executeQuery(queries.getTodoById(props.id))

  const updateTodo = () => {
    normalizedApi.updateTodo(props.id, {
      text: todoText,
      completed: completed
    })
  }
  const handleOpen = (id) => {
    setOpen({ ...open, id: true });
  };
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
                  value={todoText[0]}
                  onChange={(e) => { t = todoText, t[0] = e.target.value, setTodoText(t) }}
                  label="Дата СС"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[1]}
                  onChange={(e) => { t = todoText, t[1] = e.target.value, setTodoText(t) }}
                  label="Дата заявления"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  disabled
                  value={todo.id}
                  label="Номер обращения"
                  fullWidth={true}
                  margin="normal"
                />
                <TextField
                  value={todoText[3]}
                  onChange={(e) => { t = todoText, t[3] = e.target.value, setTodoText(t) }}
                  label="Номер дела"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[4]}
                  onChange={(e) => { t = todoText, t[4] = e.target.value, setTodoText(t) }}
                  label="Страхователь"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[11]}
                  onChange={(e) => { t = todoText, t[11] = e.target.value, setTodoText(t) }}
                  label="Серия/номер полиса"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[13]}
                  onChange={(e) => { t = todoText, t[13] = e.target.value, setTodoText(t) }}
                  label="Примерная сумма ущерба"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[14]}
                  onChange={(e) => { t = todoText, t[14] = e.target.value, setTodoText(t) }}
                  label="Сумма страхового возмещения"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[15]}
                  onChange={(e) => { t = todoText, t[15] = e.target.value, setTodoText(t) }}
                  label="Дата выплаты"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div class="col-sm">
                <TextField
                  value={todoText[10]}
                  onChange={(e) => { t = todoText, t[10] = e.target.value, setTodoText(t) }}
                  label="Направление/факт затрат"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[16]}
                  onChange={(e) => { t = todoText, t[16] = e.target.value, setTodoText(t) }}
                  label="Марка ТС"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[17]}
                  onChange={(e) => { t = todoText, t[17] = e.target.value, setTodoText(t) }}
                  label="Г/н"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[19]}
                  onChange={(e) => { t = todoText, t[19] = e.target.value, setTodoText(t) }}
                  label="Перечень повреждений"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[20]}
                  onChange={(e) => { t = todoText, t[20] = e.target.value, setTodoText(t) }}
                  label="Дата осмотра"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[22]}
                  onChange={(e) => { t = todoText, t[22] = e.target.value, setTodoText(t) }}
                  label="Статус"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[9]}
                  onChange={(e) => { t = todoText, t[9] = e.target.value, setTodoText(t) }}
                  label="СТОА"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={todoText[12]}
                  onChange={(e) => { t = todoText, t[12] = e.target.value, setTodoText(t) }}
                  label="Франшиза"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div class="col-sm">

                <PhoneInput
                  specialLabel="Телефон клиента"
                  country={'ru'}
                  placeholder="+7 (123) 456-78-90"
                  disableDropdown={true}
                  value={todoText[5]}
                  onChange={(e) => { t = todoText, t[5] = e, setTodoText(t) }}
                  style={{ color: "#303f9f", fontSize: 12, marginBottom:10, borderColor:"fff", width: 320, marginLeft: 20 }}
                  margin="normal"
                />
                <div style={{ color: "#303f9f", fontSize: 12, marginLeft: 20 }}>
                  Справка _______
                  <FormControl >

                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open.cert}
                      onClose={() => setOpen({ ...open, cert: false })}
                      onOpen={() => setOpen({ ...open, cert: true })}
                      value={todoText[7]}
                      style={{ width: 320, marginBottom:10 }}
                      onChange={(e) => { t = todoText, t[7] = e.target.value, setTodoText(t) }}
                    >
                      <MenuItem value={true} >Да</MenuItem>
                      <MenuItem value={false}>Нет</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div style={{ color: "#303f9f", fontSize: 12, marginLeft: 20 }}>
                  Вид страхования
                  <FormControl >
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open.type}
                      onClose={() => setOpen({ ...open, type: false })}
                      onOpen={() => setOpen({ ...open, type: true })}
                      value={todoText[6]}
                      style={{ width: 320, marginBottom:10 }}
                      onChange={(e) => { t = todoText, t[6] = e.target.value, setTodoText(t) }}
                    >
                      <MenuItem value={"Каско"}>Каско</MenuItem>
                      <MenuItem value={"ОСАГО"}>ОСАГО</MenuItem>
                      <MenuItem value={"Каско Совкомбанк"}>Каско Совкомбанк</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                {/* <div> */}
                  <div style={{ color: "#303f9f", fontSize: 12, marginLeft: 20 }}>
                    Выплатники _______
                  {/* </div> */}
                  <FormControl >
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open.pay}
                      onClose={() => setOpen({ ...open, pay: false })}
                      onOpen={() => setOpen({ ...open, pay: true })}
                      value={todoText[8]}
                      style={{ width: 320, marginBottom:10 }}
                      onChange={(e) => { t = todoText, t[8] = e.target.value, setTodoText(t) }}
                    >
                      <MenuItem value={"Сидорова Анна Викторовна"}>Сидорова Анна Викторовна</MenuItem>
                      <MenuItem value={"Сторожилов Илья Владимирович"}>Сторожилов Илья Владимирович</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div style={{ color: "#303f9f", fontSize: 12, marginLeft: 20 }}>
                  Оригиналы документов
                  <FormControl >
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open.docorig}
                      onClose={() => setOpen({ ...open, docorig: false })}
                      onOpen={() => setOpen({ ...open, docorig: true })}
                      value={todoText[21]}
                      style={{ width: 320, marginBottom:10 }}
                      onChange={(e) => { t = todoText, t[21] = e.target.value, setTodoText(t) }}
                    >
                      <MenuItem value={true}>Да</MenuItem>
                      <MenuItem value={false}>Нет</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  value={todoText[23]}
                  onChange={(e) => { t = todoText, t[23] = e.target.value, setTodoText(t) }}
                  autoFocus
                  margin="dense"
                  id="com1"
                  label="Комментарии/дата комментария"
                  type="text"
                  style={{ width: 320, marginLeft: 20 }}
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