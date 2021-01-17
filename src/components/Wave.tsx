import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

type Props = {
  title: string;
  inputTime: string;
  displayTime: string;
  onchange: (min: number) => void;
}

const Wave: React.FC<Props> = ({ title, inputTime, displayTime, onchange }: Props) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems="baseline">
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>{title}</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <form className={classes.container} noValidate>
            <TextField
              id="time"
              label="出現時刻を入力"
              type="time"
              defaultValue={inputTime}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={event => {
                const vals = event.target.value.split(":");
                onchange(60 * parseInt(vals[0]) + parseInt(vals[1]));
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={3}>
          <form className={classes.container} noValidate>
            <TextField
              id="time"
              label="予想時刻"
              type="time"
              value={displayTime}
              disabled={true}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Wave;