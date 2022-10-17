import { useRef, useState } from 'react';
import { Layout, FlexBox } from './Sound.styled';
import Application from 'components/Desktop/Application';
import sound from 'assets/icons/sound.png';
const testMp3_1 = require('assets/music/test.mp3');
const testMp3_2 = require('assets/music/test2.mp3');
const testMp3_3 = require('assets/music/test3.mp3');

enum AudioID {
  Audio1,
  Audio2,
  Audio3,
}

function Sound() {
  const pointer = useRef(AudioID.Audio1);
  const audioPlay = useRef<NodeJS.Timer>();
  const [audio] = useState<HTMLAudioElement>(
    new Audio(PLAY_LIST.find((audio) => audio.id === pointer.current)?.src)
  );
  const [audioTime, setAuditoTime] = useState<number>();

  const handlePlay = () => {
    if (audio) {
      audio.play();
      audioPlay.current = setInterval(() => {
        const audioTime_ = Math.round(audio.currentTime);
        setAuditoTime(audioTime_);
        const audioLength = Math.round(audio.duration);

        if (audioTime_ === audioLength && pointer.current < AudioID.Audio3) {
          pointer.current += 1;
          switchTreck();
        } else if (
          audioTime === audioLength &&
          pointer.current === AudioID.Audio3
        ) {
          pointer.current = AudioID.Audio1;
          switchTreck();
        }
      }, 10);
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
      clearInterval(audioPlay.current);
    }
  };

  const handleNext = () => {
    if (pointer.current === AudioID.Audio3) {
      pointer.current = AudioID.Audio1;
    } else {
      pointer.current += 1;
    }

    switchTreck();
  };

  const handlePrev = () => {
    if (pointer.current === AudioID.Audio1) {
      pointer.current = AudioID.Audio3;
    } else {
      pointer.current -= 1;
    }

    switchTreck();
  };

  const switchTreck = () => {
    if (audio) {
      audio.src = PLAY_LIST[pointer.current].src;
      audio.currentTime = 0;
      audio.play();
    }
  };

  const playtime = () => {
    let playtimeFormat = '00:00';
    if (audioTime) {
      const strAudioTime = audioTime!.toString();
      if (strAudioTime.length >= 3) {
        playtimeFormat = `0${strAudioTime[0]}:${strAudioTime[1]}${strAudioTime[2]}`;
      } else if (strAudioTime.length === 2) {
        playtimeFormat = `00:${strAudioTime[0]}${strAudioTime[1]}`;
      } else {
        playtimeFormat = `00:0${strAudioTime[0]}`;
      }
    }

    return playtimeFormat;
  };

  return (
    <Application id={9} src={sound} name='My Music' desktop={false}>
      <Layout>
        <div className='music-control'>
          <div className='time'>
            [{pointer.current + 1}] {playtime()}
          </div>
          <div className='control'>
            <div>
              <button className={'play'} onClick={handlePlay}></button>
              <button className='stop' onClick={handlePause}></button>
            </div>
            <div>
              <button className='prev' onClick={handlePrev}></button>
              <button className='next' onClick={handleNext}></button>
            </div>
          </div>
        </div>

        <div className='music-info'>
          <FlexBox>
            <p>Artist: </p>
            <select value={PLAY_LIST[pointer.current].artist} disabled>
              <option value={PLAY_LIST[AudioID.Audio1].artist}>
                {PLAY_LIST[AudioID.Audio1].artist}
              </option>
              <option value={PLAY_LIST[AudioID.Audio2].artist}>
                {PLAY_LIST[AudioID.Audio2].artist}
              </option>
              <option value={PLAY_LIST[AudioID.Audio3].artist}>
                {PLAY_LIST[AudioID.Audio3].artist}
              </option>
            </select>
          </FlexBox>
          <FlexBox>
            <p>Title: </p>
            <select disabled value={PLAY_LIST[pointer.current].title}>
              <option value={AudioID.Audio1}>
                {PLAY_LIST[AudioID.Audio1].title}
              </option>
              <option value={AudioID.Audio2}>
                {PLAY_LIST[AudioID.Audio2].title}
              </option>
              <option value={AudioID.Audio3}>
                {PLAY_LIST[AudioID.Audio3].title}
              </option>
            </select>
          </FlexBox>
          <FlexBox>
            <p>Track: </p>
            <select disabled value={PLAY_LIST[pointer.current].id}>
              <option value={AudioID.Audio1}>
                {PLAY_LIST[AudioID.Audio1].id}
              </option>
              <option value={AudioID.Audio2}>
                {PLAY_LIST[AudioID.Audio2].id}
              </option>
              <option value={AudioID.Audio3}>
                {PLAY_LIST[AudioID.Audio3].id}
              </option>
            </select>
          </FlexBox>
        </div>
      </Layout>
    </Application>
  );
}

export default Sound;

const PLAY_LIST = [
  { id: AudioID.Audio1, title: '우웅이', artist: '웅냥이', src: testMp3_1 },
  { id: AudioID.Audio2, title: '우웅이2', artist: '웅냥이2', src: testMp3_2 },
  { id: AudioID.Audio3, title: '우웅이3', artist: '웅냥이3', src: testMp3_3 },
];
