import React from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function Signin() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  return (
    <Grid container spacing={3} style={{ height: '100%' }}>
      <Grid item md={7} lg={7}>
        a
      </Grid>
      <Grid
        item
        md={3}
        lg={3}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container>
          <Grid
            item
            md={12}
            style={{ color: '#6FBF8B', fontSize: 26, padding: 20 }}
          >
            Entrar
          </Grid>
          <Grid item md={12} style={{ color: '#FFF', padding: 20 }}>
            Leia, compartilhe , acompanhe e divirta-se no mundo incrível da
            leitura
          </Grid>
          <Grid item md={12} style={{ padding: 20 }}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <OutlinedInput
                placeholder="Id de acesso"
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={(event) =>
                  setValues({ ...values, password: event.target.value })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setValues({
                          ...values,
                          showPassword: !values.showPassword,
                        })
                      }
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item md={12} style={{ padding: 20 }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#6FBF8B',
              }}
              fullWidth
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Signin;
