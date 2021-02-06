import React from "react"
import Button from '@material-ui/core/Button';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { waves, min2str } from './func';

type Props = {
  minutes: number
}

export default function CopyPasteButton({ minutes }: Props) {
  let text = `ジェム鉱脈の予想出現時刻です\n`;
  waves.map(wave => {
    text += `${wave.title}: ${min2str(minutes + wave.dmin)}\n`
  })

  return (
    <CopyToClipBoard text={text}>
      <Button variant="contained" color="primary">
        コピペボタン
      </Button>
    </CopyToClipBoard>

  )
}