import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Wave from "./components/Wave";


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

function min2str(minutes: number): string {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${('00' + hour).slice(-2)}:${('00' + minute).slice(-2)}`
}

function App() {
  const classes = useStyles();
  const [minutes, setMinutes] = useState(480);

  const waves = [
    { index: 0, title: "Lv1 wave1", dmin: 0 },
    { index: 1, title: "Lv1 wave2", dmin: 4 },
    { index: 2, title: "Lv2 wave1", dmin: 8 },
    { index: 3, title: "Lv2 wave2", dmin: 16 },
    { index: 4, title: "Lv2 wave3", dmin: 24 },
    { index: 5, title: "Lv3 wave1", dmin: 32 },
    { index: 6, title: "Lv3 wave2", dmin: 44 },
    { index: 7, title: "Lv4 wave1", dmin: 56 },
    { index: 8, title: "Lv4 wave2", dmin: 85 },
    { index: 9, title: "Lv4 wave3", dmin: 114 },
    { index: 10, title: "Lv5 wave1", dmin: 143 },
    { index: 11, title: "Lv5 wave2", dmin: 212 },
  ]

  function setMinutesByWave(wave: number, newWaveMinute: number) {
    setMinutes(newWaveMinute - waves[wave].dmin);
  }

  console.log(minutes)

  return (
    <div className={classes.root}>
      { waves.map(
        ({ title, dmin, index }) =>
          <Wave
            key={title}
            title={title}
            displayTime={min2str(minutes + dmin)}
            inputTime={"00:00"}
            onchange={(min: number) => setMinutesByWave(index, min)}
          />)}

    </div>
  );
}

export default App;
