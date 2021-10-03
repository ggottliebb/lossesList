import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNormalizedApi } from './db'
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const AddTodoDialog = (props) => {
  let normalizedApi = useNormalizedApi()
  const textDef = {
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
    franchType: "",
  }

  let [text, setText] = useState(textDef)

  // var char = /["a-zA-Z]/;
  // var val = String.fromCharCode(text.numauto);
  // var test = char.test(val);

  const [open, setOpen] = React.useState({
    cert: false,

    franchType: false,

    type: false,
    pay: false,
    docorig: false
  });

  let char = /["а-яА-Я]/;

  const handleOpen = (id) => {
    setOpen({ ...open, id: true });
  };
  let [er, setEr] = useState({
    numapp: false,
    datess: false,
    numauto: false,
    dateapp: false,
    dateappText: false,
    dateappCheck: false,
    numcase: false,
    polic: false,
    mark: false
  });
  const addTodo = () => {

    switch ("") {
      case text.datess:
        setEr({ ...er, datess: true })
        break
      case text.dateapp:
        setEr({ ...er, dateapp: true })
        break
      case text.numcase:
        setEr({ ...er, numcase: true })
        break
      case text.polic:
        setEr({ ...er, polic: true })
        break
      case text.mark:
        setEr({ ...er, mark: true })
        break

      default:
        if (new Date(text.datess) > new Date(text.dateapp)) {
          setEr({
            numapp: false,
            datess: false,
            dateapp: true,
            numauto: false,
            dateappText: true,
            dateappCheck: false,
            numcase: false,
            polic: false,
            mark: false
          })
          break
        }
        if (new Date(text.datess) > new Date(text.dateinsp)) {
          setEr({
            numapp: false,
            datess: false,
            dateapp: true,
            numauto: false,
            dateappText: false,
            dateappCheck: true,
            numcase: false,
            polic: false,
            mark: false
          })
          break
        }
        if (text.numauto.match(char)!=null||text.numauto==="") {
          setEr({
            numapp: false,
            datess: false,
            dateapp: false,
            numauto: true,
            dateappText: false,
            dateappCheck: false,
            numcase: false,
            polic: false,
            mark: false
          })
          break
        }
        normalizedApi.addTodo(text)
          .then(() => {
            props.onSuccess();
            cleanEn();
          })
          .catch(() => {
            props.onCancel()
          })
    }

    console.log(er)
  }
  const cleanEn = () => {
    setEr({
      numapp: false,
      datess: false,
      dateapp: false,
      dateappText: false,
      numcase: false,
      polic: false,
      mark: false
    });
    setText(textDef);
    props.onCancel();
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
                error={er.datess}
                required={true}

                margin="dense"
                id="datess"
                name="Дата СС"
                label="Дата СС"
                type="date"
                style={{ width: 320 }}

                InputLabelProps={{ shrink: true }}

              />
              <TextField
                value={{ text }.dateapp}
                onChange={(e) => setText({ ...text, dateapp: e.target.value })}
                autoFocus
                error={er.dateapp}

                helperText={er.dateappText ? 'Дата заявления должна быть позже даты СС' : ""}

                required={true}
                margin="dense"
                id="dateapp"
                label="Дата заявления"
                type="date"
                style={{ width: 320 }}

                InputLabelProps={{ shrink: true }}

              />
              <TextField
                value={{ text }.numcase}
                onChange={(e) => setText({ ...text, numcase: e.target.value })}
                autoFocus
                error={er.numcase}
                required={true}
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
                error={er.polic}
                required={true}
                margin="dense"
                id="polic"
                label="Страхователь"
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
                value={{ text }.sumdam}
                onChange={(e) => setText({ ...text, sumdam: e.target.value })}
                autoFocus
                margin="dense"
                id="sumdam"
                label="Примерная сумма ущерба"
                type="number"
                style={{ width: 320 }}
              />

              <TextField
                value={{ text }.sumcompen}
                onChange={(e) => setText({ ...text, sumcompen: e.target.value })}
                autoFocus
                margin="dense"
                id="sumcompen"
                label="Сумма страхового возмещения"
                type="number"
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

                InputLabelProps={{ shrink: true }}

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
                value={{ text }.mark}
                onChange={(e) => setText({ ...text, mark: e.target.value })}
                autoFocus
                error={er.mark}
                required={true}
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
                error={er.numauto}
                // pattern="[A-Za-z]" 
                // inputProps={{ pattern: "[a-z]" }}
                inputProps={{ pattern: '[a-z]' }}
                style={{ width: 320 }}

              // inputProps= {{
              // pattern:"[А-Яа-яЁё ]"}}
              />
              {/* <TextField
                value={{ text }.note}
                onChange={(e) => setText({ ...text, note: e.target.value })}
                autoFocus
                margin="dense"
                id="note"
                label="Примечание"
                type="text"
                style={{ width: 320 }}
              /> */}

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
                error={er.dateappCheck}
                helperText={er.dateappCheck ? 'Дата осмотра должна быть позже даты СС' : ""}
                label="Дата осмотра"
                type="date"
                style={{ width: 320 }}
                InputLabelProps={{ shrink: true }}

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
                value={{ text }.stao}
                onChange={(e) => setText({ ...text, stao: e.target.value })}
                autoFocus
                margin="dense"
                id="stao"
                label="СТОА"
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
                type="number"
                style={{ width: 270 }}
              />
              <FormControl >
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open.franchType}
                  onClose={() => setOpen({ ...open, franchType: false })}
                  onOpen={() => setOpen({ ...open, franchType: true })}
                  value={text.franchType}
                  onChange={(e) => setText({ ...text, franchType: e.target.value })}
                  style={{ height: 53 }}
                >
                  <MenuItem value={"Условная"} >Условная</MenuItem>
                  <MenuItem value={"Безусловная"}>Безусловная</MenuItem>
                  <MenuItem value={"Динамическая"}>Динамическая</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div class="col-sm">
              <PhoneInput
                specialLabel="Телефон клиента"
                country={'ru'}
                placeholder="+7 (123) 456-78-90"
                disableDropdown={true}
                value={{ text }.tel}
                onChange={(e) => setText({ ...text, tel: e })}
                style={{ width: 320 }}
              />
              <div>
                <Button onClick={handleOpen}>
                  Справка
                </Button>
                <FormControl >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open.cert}
                    onClose={() => setOpen({ ...open, cert: false })}
                    onOpen={() => setOpen({ ...open, cert: true })}
                    value={text.cert}
                    onChange={(e) => setText({ ...text, cert: e.target.value })}
                  >
                    <MenuItem value={"Да"} >Да</MenuItem>
                    <MenuItem value={"Нет"}>Нет</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <Button onClick={handleOpen}>
                  Вид страхования
                </Button>
                <FormControl >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open.type}
                    onClose={() => setOpen({ ...open, type: false })}
                    onOpen={() => setOpen({ ...open, type: true })}
                    value={text.type}
                    onChange={(e) => setText({ ...text, type: e.target.value })}
                  >
                    <MenuItem value={"Каско"}>Каско</MenuItem>
                    <MenuItem value={"ОСАГО"}>ОСАГО</MenuItem>
                    <MenuItem value={"Каско Совкомбанк"}>Каско Совкомбанк</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <Button onClick={handleOpen}>
                  Выплатники
                </Button>
                <FormControl >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open.pay}
                    onClose={() => setOpen({ ...open, pay: false })}
                    onOpen={() => setOpen({ ...open, pay: true })}
                    value={text.pay}
                    onChange={(e) => setText({ ...text, pay: e.target.value })}
                  >
                    <MenuItem value={"Сидорова Анна Викторовна"}>Сидорова Анна Викторовна</MenuItem>
                    <MenuItem value={"Сторожилов Илья Владимирович"}>Сторожилов Илья Владимирович</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <Button onClick={handleOpen}>
                  Оригиналы документов
                </Button>
                <FormControl >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open.docorig}
                    onClose={() => setOpen({ ...open, docorig: false })}
                    onOpen={() => setOpen({ ...open, docorig: true })}
                    value={text.docorig}
                    onChange={(e) => setText({ ...text, docorig: e.target.value })}
                  >
                    <MenuItem value={"Да"}>Да</MenuItem>
                    <MenuItem value={"Нет"}>Нет</MenuItem>
                  </Select>
                </FormControl>
              </div>
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

              {/* <TextField
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
              /> */}
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={text.cert}
                    onChange={(e) => setText({ ...text, cert: e.target.checked })}
                  />
                }
                label="Справка Да/НЕТ"
              /> */}


            </div>
          </div>
        </div>
      </DialogContent>




      <DialogActions>
        <Button onClick={cleanEn} color="primary">

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

