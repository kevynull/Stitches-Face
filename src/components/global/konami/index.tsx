/*
 * @Author: kevyn
 * @Date: 2021-03-17 17:33:26
 * @LastEditors: kevyn
 * @LastEditTime: 2022-02-21 20:38:46
 */
import { Button } from '@mui/material';
import React from 'react';
import { useEffect, useCallback, useRef, useState } from 'react'

const KonamiCode: React.FC = () => {

  //const [cheatCodeActive, setCheatCodeActive] = useState(false)

  useKonamiCode(() => {
    //setCheatCodeActive(true)
    console.log('Konami Code!!!!!!')
  })

  // if (cheatCodeActive) return (
  //   <div>
  //     <Button 
  //       variant="contained"
  //       onClick={() =>
  //         setCheatCodeActive(false)
  //       }>
  //         X
  //     </Button>  
  //   </div>
  // )
  return null
};

export default KonamiCode;

export function useKonamiCode(
  callback: () => void,
  sequence: string[] = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ]
): void {
  const buffer = useRef<string[]>([])

  const keySequence = useCallback((event: KeyboardEvent) => {
  

    if (event.defaultPrevented) return
    console.log(buffer.current.length);

    if (event.key === sequence[buffer.current.length] 
      || event.key.toUpperCase() === sequence[buffer.current.length] ) {
      buffer.current = [...buffer.current, event.key]
    } else {
      buffer.current = []
    }

    if (buffer.current.length === sequence.length) {
      const bufferString = buffer.current.toString()
      const sequenceString = sequence.toString()

      if (sequenceString === bufferString) {
        buffer.current = []
        callback()
      }
    }
  }, [sequence])


  useEffect(() => {
    document.addEventListener('keydown', keySequence)
    return () => document.removeEventListener('keydown', keySequence)
  }, [keySequence])
}
