import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Wave from "./components/Wave";
import CopyPasteButton from "./components/CopyPasteButton";
import { waves, min2str } from "./components/func"
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

  function setMinutesByWave(wave: number, newWaveMinute: number) {
    setMinutes(newWaveMinute - waves[wave].dmin);
  }

  console.log(minutes)

  return (
    <div className={classes.root}>
      <CopyPasteButton minutes={minutes} />
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
