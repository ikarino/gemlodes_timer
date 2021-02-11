import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import Wave from "./components/Wave";
import CopyPasteButton from "./components/CopyPasteButton";
import { new_waves, old_waves, min2str } from "./components/func"
import Description from "./components/Description"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(0.5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


function App() {
  const classes = useStyles();
  const [minutes, setMinutes] = useState(480);
  const [wave, setWave] = useState(true);

  const waves = wave ? new_waves : old_waves;

  const text = wave ? <p>新バージョン</p> : <p>旧バージョン</p>

  function setMinutesByWave(wave: number, newWaveMinute: number) {
    setMinutes(newWaveMinute - waves[wave].dmin);
  }

  console.log(minutes)

  return (
    <div className={classes.root}>
      <Switch
        checked={wave}
        onChange={(e) => { setWave(e.target.checked) }}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{text}
      <br />
      <CopyPasteButton minutes={minutes} waves={waves} />
      { waves.map(
        ({ title, dmin, index }) =>
          <Wave
            key={title}
            title={title}
            displayTime={min2str(minutes + dmin)}
            inputTime={"00:00"}
            onchange={(min: number) => setMinutesByWave(index, min)}
          />)}

      <Description />
    </div>
  );
}

export default App;
