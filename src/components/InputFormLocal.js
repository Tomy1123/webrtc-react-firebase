import React, { useState, useEffect, useCallback } from 'react';
/* import Avatar from '@material-ui/core/Avatar'; */
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
/* import FormControlLabel from '@material-ui/core/FormControlLabel'; */
/* import Checkbox from '@material-ui/core/Checkbox'; */
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
/* import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; */
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import App from './App';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Tomy1123/webrtc-react-firebase">
        Tomy1123
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({ localPeerName, setLocalPeerName }) {
  const label = "あなたの名前"
  const classes = useStyles(); 
  const [disabled, setDisabled] = useState(true); /* ボタンの状態 */
  const [name, setName] = useState(''); /* 名前 */
  const [isComposed, setIsComposed] =useState(false) /* 日本語の変換中かどうか */

  /* 名前の変化を監視しボタンが押せる状態かどうかを決める */
  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
  }, [name]);

  /* App.jsで管理している名前の初期化 */
  const initiakizeLocalPeer = useCallback((e) => {
    setLocalPeerName(name);
    e.preventDefault();
  }, [name, setLocalPeerName]);

  /* App.jsから渡ってきな名前が空じゃない時だけreturn */
  if (localPeerName !== '') return <></>;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          {label}を入力して下さい
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={label}
              name="name"
              onChange={(e) => setName(e.target.value)}
              onCompositionEnd={() => setIsComposed(false)}
              onCompositionStart={() => setIsComposed(true)}
              onKeyDown={(e) => {
                if (isComposed) return;
                if (e.target.value === '') return;
                if (e.key === "Enter") initiakizeLocalPeer(e)
              }}
              value={name}
              autoFocus
            />
            <Button
              type="submit"
              disabled={disabled}
              onClick={(e) => initiakizeLocalPeer(e)}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              決定
            </Button>
            <Box mt={8}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>

  );
}
