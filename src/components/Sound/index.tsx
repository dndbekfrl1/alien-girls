import { useState } from 'react';
import { Layout, FlexBox } from './Sound.styled';
import Application from 'components/Desktop/Application';
import sound from 'assets/icons/sound.png';
const testMp3_1 = require('assets/music/test.mp3');
const testMp3_2 = require('assets/music/test.mp3');
const testMp3_3 = require('assets/music/test.mp3');

function Sound() {
  const [play, setPlay] = useState(false);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(
    new Audio(testMp3_1)
  );
  // const musicQ ref? state?

  return (
    <Application id={9} src={sound} name='My Music' desktop={false}>
      <Layout>
        <div className='music-control'>
          <div className='sec'>[04] 00:14</div>
          <div className='control'>
            <div>
              <button
                className='play'
                onClick={() => {
                  setPlay(true);
                  if (audio) {
                    audio.play();
                  }
                }}
              ></button>
              <button
                onClick={() => {
                  setPlay(false);
                  if (audio) {
                    audio.pause();
                  }
                }}
              ></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
        <div className='music-info'>
          <FlexBox>
            <p>Artist: </p>
            <select>
              <option value='1'>qwer</option>
              <option value='2'>asdf</option>
              <option value='3'>zxcv</option>
            </select>
          </FlexBox>
          <FlexBox>
            <p>Title: </p>
            <select>
              <option value='1'>qwer</option>
              <option value='2'>asdf</option>
              <option value='3'>zxcv</option>
            </select>
          </FlexBox>
          <FlexBox>
            <p>Track: </p>
            <select>
              <option value='1'>qwer</option>
              <option value='2'>asdf</option>
              <option value='3'>zxcv</option>
            </select>
          </FlexBox>
        </div>
      </Layout>
    </Application>
  );
}

export default Sound;
