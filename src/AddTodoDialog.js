import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNormalizedApi } from './db'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AddTodoDialog = (props) => {
  let normalizedApi = useNormalizedApi()
  let [text, setText] = useState({
    datess: "",
    dateapp: "",
    numapp: "",
    numcase: "",
    polic: "",
    tel: "",
    type: "",
    cert: "",
    pay: "",
    stao: "",
    fact: "",
    numpoli: "",
    franch: "",
    sumdam: "",
    sumcompen: "",
    datepay: "",
    mark: "",
    numauto: "",
    note: "",
    damlist: "",
    dateinsp: "",
    docorig: "",
    status: "",
    com1: "",
    com2: "",
    com3: "",
  })

  const addTodo = () => {
    normalizedApi.addTodo(text)
      .then(() => {
        props.onSuccess()
      })
      .catch(() => {
        props.onCancel()
      })
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.onCancel}
      aria-labelledby="form-dialog-title"
      maxWidth="lg"
    >
      <DialogTitle id="form-dialog-title">Добавить убыток</DialogTitle>
      <DialogContent>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <TextField
                value={{ text }.datess}
                onChange={(e) => setText({ ...text, datess: e.target.value })}
                autoFocus={false}
                placeholder="112"
                margin="dense"
                id="datess"
                name="Дата СС"
                label="Дата СС"
                type="date"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.dateap}
                onChange={(e) => setText({ ...text, dateapp: e.target.value })}
                autoFocus
                margin="dense"
                id="dateapp"
                label="Дата заявления"
                type="date"
                style={{ width: 320 }}
              />

              <TextField
                value={{ text }.numapp}
                onChange={(e) => setText({ ...text, numapp: e.target.value })}
                autoFocus
                margin="dense"
                id="numapp"
                label="Номер обращения"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.numcase}
                onChange={(e) => setText({ ...text, numcase: e.target.value })}
                autoFocus
                margin="dense"
                id="numcase"
                label="Номер дела"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.polic}
                onChange={(e) => setText({ ...text, polic: e.target.value })}
                autoFocus
                margin="dense"
                id="polic"
                label="Страхователь"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.tel}
                onChange={(e) => setText({ ...text, tel: e.target.value })}
                autoFocus
                margin="dense"
                id="tel"
                label="Телефон клиента"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.type}
                onChange={(e) => setText({ ...text, type: e.target.value })}
                autoFocus
                margin="dense"
                id="type"
                label="ВИД страхования"
                type="text"
                style={{ width: 320 }}
              />
              {/* <TextField
                value={{ text }.cert}
                onChange={(e) => setText({ ...text, cert: e.target.value })}
                autoFocus
                margin="dense"
                id="cert"
                label="Справка Да/НЕТ"
                type="checkbox"
                style={{ width: 320 }}
              /> */}
              <TextField
                value={{ text }.pay}
                onChange={(e) => setText({ ...text, pay: e.target.value })}
                autoFocus
                margin="dense"
                id="pay"
                label="Выплатник"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.stao}
                onChange={(e) => setText({ ...text, stao: e.target.value })}
                autoFocus
                margin="dense"
                id="stao"
                label="СТОА"
                type="text"
                style={{ width: 320 }}
              />
            </div>
            <div class="col-sm">


              <TextField
                value={{ text }.fact}
                onChange={(e) => setText({ ...text, fact: e.target.value })}
                autoFocus
                margin="dense"
                id="fact"
                label="Направление/факт затрат"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.numpoli}
                onChange={(e) => setText({ ...text, numpoli: e.target.value })}
                autoFocus
                margin="dense"
                id="numpoli"
                label="Серия/номер полиса"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.franch}
                onChange={(e) => setText({ ...text, franch: e.target.value })}
                autoFocus
                margin="dense"
                id="franch"
                label="Франшиза"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.sumdam}
                onChange={(e) => setText({ ...text, sumdam: e.target.value })}
                autoFocus
                margin="dense"
                id="sumdam"
                label="Примерная сумма ущерба"
                type="text"
                style={{ width: 320 }}
              />

              <TextField
                value={{ text }.sumcompen}
                onChange={(e) => setText({ ...text, sumcompen: e.target.value })}
                autoFocus
                margin="dense"
                id="sumcompen"
                label="Сумма страхового возмещения"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.datepay}
                onChange={(e) => setText({ ...text, datepay: e.target.value })}
                autoFocus
                margin="dense"
                id="datepay"
                label="Дата выплаты"
                type="date"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.mark}
                onChange={(e) => setText({ ...text, mark: e.target.value })}
                autoFocus
                margin="dense"
                id="mark"
                label="Марка ТС"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.numauto}
                onChange={(e) => setText({ ...text, numauto: e.target.value })}
                autoFocus
                margin="dense"
                id="numauto"
                label="Г/н"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.note}
                onChange={(e) => setText({ ...text, note: e.target.value })}
                autoFocus
                margin="dense"
                id="note"
                label="Примечание"
                type="text"
                style={{ width: 320 }}
              />


            </div>
            <div class="col-sm">



              <TextField
                value={{ text }.damlist}
                onChange={(e) => setText({ ...text, damlist: e.target.value })}
                autoFocus
                margin="dense"
                id="damlist"
                label="Перечень повреждений"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.dateinsp}
                onChange={(e) => setText({ ...text, dateinsp: e.target.value })}
                autoFocus
                margin="dense"
                id="dateinsp"
                label="Дата осмотра"
                type="date"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.docorig}
                onChange={(e) => setText({ ...text, docorig: e.target.value })}
                autoFocus
                margin="dense"
                id="docorig"
                label="Оригиналы документов"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.status}
                onChange={(e) => setText({ ...text, status: e.target.value })}
                autoFocus
                margin="dense"
                id="status"
                label="Статус"
                type="text"
                style={{ width: 320 }}
              />

              <TextField
                value={{ text }.com1}
                onChange={(e) => setText({ ...text, com1: e.target.value })}
                autoFocus
                margin="dense"
                id="com1"
                label="Комментарии/дата комментария"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.com2}
                onChange={(e) => setText({ ...text, com2: e.target.value })}
                autoFocus
                margin="dense"
                id="com2"
                label="Комментарии/дата комментария"
                type="text"
                style={{ width: 320 }}
              />
              <TextField
                value={{ text }.com3}
                onChange={(e) => setText({ ...text, com3: e.target.value })}
                autoFocus
                margin="dense"
                id="com3"
                label="Комментарии/дата комментария"
                type="text"
                style={{ width: 320 }}
              />
              {/* <FormControlLabel */}
              <Typography component="div" >

                <Grid component="label" container alignItems="center" spacing={1} >
                  <Grid item> Справка Нет</Grid>
                  <Grid item>
                    <Switch onChange={(e) => setText({ ...text, cert: e.target.checked })} name="checkedC" />
                  </Grid>
                  <Grid item>Да</Grid>
                </Grid>
              </Typography>
              {/* /> */}

              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={text.cert}
                    onChange={(e) => setText({ ...text, cert: e.target.checked })}
                  />
                }
                label="Справка Да/НЕТ"
              /> */}
              <FormControlLabel
                label="Справка Да/НЕТ"
                options={["11"]}
                control={
                  <Select

                    // checked={text.cert}
                    options={["11"]}
                    onChange={(e) => setText({ ...text, cert: e.target.checked })}
                  />
                }

              />

            </div>
          </div>
        </div>
      </DialogContent>



      <DialogActions>
        <Button onClick={props.onCancel} color="primary">
          Отмена
        </Button>
        <Button onClick={addTodo} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTodoDialog
