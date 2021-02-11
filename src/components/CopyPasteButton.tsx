import React from "react"
import Button from '@material-ui/core/Button';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { min2str } from './func';

type Wave = {
  index: number,
  title: string,
  dmin: number
}

type Props = {
  minutes: number,
  waves: Wave[]
}

export default function CopyPasteButton({ minutes, waves }: Props) {
  const text = `ジェム鉱脈の予想出現時刻です\n` + waves.map(wave => {
    return `${wave.title}: ${min2str(minutes + wave.dmin)}\n`
  }).join('')

  return (
    <CopyToClipBoard text={text}>
      <Button variant="contained" color="primary">
        コピペボタン
      </Button>
    </CopyToClipBoard>

  )
}