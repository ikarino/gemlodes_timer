import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 200,
      padding: theme.spacing(1),
    },
    linone: {
      listStyle: 'none'
    }
  }),
);

export default function Discription() {
  const classes = useStyles();
  return <Paper className={classes.root}>
    <Typography variant="h5" gutterBottom>
      ジェム鉱脈出現の法則
    </Typography>
    <Typography variant="body1" gutterBottom>
      ジェム鉱脈の出現時刻には簡単な法則があります。
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>レベル</TableCell>
              <TableCell align="center">出現回数</TableCell>
              <TableCell align="center">出現間隔</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Lv. 1
              </TableCell>
              <TableCell align="center">2回</TableCell>
              <TableCell align="center">4分ごと</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lv. 2
              </TableCell>
              <TableCell align="center">3回(21/2/10から2回?)</TableCell>
              <TableCell align="center">8分ごと</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lv. 3
              </TableCell>
              <TableCell align="center">2回</TableCell>
              <TableCell align="center">12分ごと</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lv. 4
              </TableCell>
              <TableCell align="center">3回(21/2/10から2回?)</TableCell>
              <TableCell align="center">29分ごと</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lv. 5
              </TableCell>
              <TableCell align="center">2回</TableCell>
              <TableCell align="center">69分ごと</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p>
        最初にLv.1が出現する時刻はランダムなので分かりません（約6時間周期）。<br /><br />
      ここでは08:00に出現した場合を例に紹介します。
      </p>

      <ul>
        <li>
          <b>08:00にLv.1のwave 1が出現</b>
        </li>
        <li className={classes.linone}>
          -- 4分経過
        </li>
        <li>
          <b>08:04にLv.1のwave 2が出現</b>
        </li>
        <li className={classes.linone}>
          -- 4分経過
        </li>
        <li>
          <b>08:08にLv.1のwave 3ではなく、Lv.2のwave 1が出現</b>
        </li>
        <li className={classes.linone}>
          -- 8分経過
        </li>
        <li>
          <b>08:16にLv.2のwave 2が出現</b>
        </li>
        <li className={classes.linone}>
          -- 8分経過
        </li>
        <li>
          <b>08:24にLv.2のwave 3が出現</b>
        </li>
        <li className={classes.linone}>
          -- 8分経過
        </li>
        <li>
          <b>08:32にLv.2のwave 4ではなく、Lv.3のwave 1が出現</b>
        </li>
        <li className={classes.linone}>
          -- 12分経過
        </li>
        <li>
          <b>08:44にLv.3のwave 2が出現</b>
        </li>
        <li className={classes.linone}>
          -- 12分経過
        </li>
        <li>
          <b>08:56にLv.3のwave 3ではなく、Lv.4のwave 1が出現</b>
        </li>
        <li className={classes.linone}>
          -- 29分経過
        </li>
        <li>
          <b>09:25にLv.4のwave 2が出現</b>
        </li>
        <li className={classes.linone}>
          -- 29分経過
        </li>
        <li>
          <b>09:54にLv.4のwave 3が出現（しないっぽい？2021/02/10春節イベントから）</b>
        </li>
        <li className={classes.linone}>
          -- 29分経過
        </li>
        <li>
          <b>10:23にLv.4のwave 4ではなく、Lv.5のwave 1が出現</b>
        </li>
        <li className={classes.linone}>
          -- 69分経過
        </li>
        <li>
          <b>11:32にLv.5のwave 2が出現</b>
        </li>

      </ul>

      <br />
      <p>
        以上からわかりますように、waveの出現時刻が1つでも判明すれば、他のレベルの出現時刻が決まってきます。<br />
        このアプリに判明した出現時刻を入力することで、他のwaveの予想出現時刻が表示されるようになっています。<br /><br />
        Lv.4やLv.5を最速で採取を始めるためには、Lv.1〜3の早い段階でLv.1 wave 1の出現時刻を予測する必要があります。
        出現したジェム鉱脈をギルドメンバーで報告しあうことで、予測精度をあげていきましょう！<br />
        コピペボタンで予測時刻を共有することも可能です！
      </p>
      <p>
        Copyright © 2021 怒りの葡萄＆怒りのバナナ All Rights Reserved.
      </p>
    </Typography>
  </Paper>
}