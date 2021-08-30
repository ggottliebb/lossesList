import React, { useState, useEffect, useContext } from 'react';
import { useDB, useNormalizedApi, queries } from './db'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { Context } from "./Context";

export default function Login() {
  const [context, setContext] = useContext(Context);
  let normalizedApi = useNormalizedApi();

  const login = (e) => {
    e.preventDefault();
        console.log(e.currentTarget[1].value)
        console.log(e.currentTarget[3].value)
    setContext(normalizedApi.authUser(e.currentTarget[1].value, e.currentTarget[3].value)) 
  }
  console.log(context)

  return (
    <div className='login-container'>
      <Typography component="h1" variant="h5">
        Вход
      </Typography>
      <form onSubmit={login} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          style={{ paddingTop: 10 }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          style={{ paddingTop: 10 }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Запомнить"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Отправить
        </Button>
      </form>
    </div>
  );
}



// export default function Login(){
// // const Login = () => {
//   const [credentials, setCredentials] = useState({
//       name: '',
//       password: ''
//   });

//   const onChange = ({target: {name, value}}) => {
//       setCredentials({...credentials, [name]: value})
//   };
//   let normalizedApi = useNormalizedApi()

//   const authUser = () => {
//     normalizedApi.authUser()
//   }

//   const onSubmit = (event) => {
//       if (event) {
//           event.preventDefault();
//       }

//       fetch('/login', {
//           method: 'POST',
//           body: JSON.stringify(credentials)
//       })
//           .then(r => r.json())
//           // .then(token => login(token))
//   };

//   return <form onSubmit={onSubmit}>
//       <input name="name"
//              value={credentials.name}
//              onChange={onChange}/>
//       <input name="password"
//              value={credentials.password}
//              onChange={onChange}/>
//   </form>
// };

// import React from 'react';