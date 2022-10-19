import Application from 'components/Common/Application';
import {
  Layout,
  Left,
  Center,
  QuizLayout,
} from 'components/Desktop/Desktop.styled';
import { AppEnum } from 'types/app';
import Memo from 'components/Memo';
import Quiz from 'components/Quiz';
import folder from 'assets/icons/folder.png';
import internet from 'assets/icons/internet.png';
import memo from 'assets/icons/memo.png';
import myComputer from 'assets/icons/my-computer.png';
import myMusic from 'assets/icons/music.png';
import myEarth from 'assets/icons/earth.png';
import artworkA from 'assets/images/artworka.png';
import artworkI from 'assets/images/artworki.jpeg';
import artworkL from 'assets/images/artworkl.jpeg';
import artworkE from 'assets/images/artworke.png';
import artwork5 from 'assets/images/artwork5.png';
import artwork6 from 'assets/images/artwork6.png';
import artwork7 from 'assets/images/artwork7.png';
import internetExplorer from 'assets/images/internet-explorer.gif';
import Music from 'components/Music';

function Desktop() {
  return (
    <Layout>
      <Left>
        <Application
          id={AppEnum.Internet}
          src={internet}
          name='Internet Explorer'
        >
          <img src={internetExplorer} />
        </Application>
        <Application
          id={AppEnum.Memo}
          src={memo}
          name='Memo'
          defaultX={1546}
          defaultY={336}
        >
          <Memo />
        </Application>
        <Application
          id={AppEnum.MyComputer}
          src={myComputer}
          name='My Computer'
        >
          <div>My Computer</div>
        </Application>
        <Application
          id={AppEnum.MyMusic}
          src={myMusic}
          name='My Music'
          defaultX={602}
          defaultY={517}
          Render={(appInfo) => <Music {...appInfo} />}
        />
        <Application id={AppEnum.MyEarth} src={myEarth} name='My Earth'>
          <div>My Earth</div>
        </Application>
      </Left>
      <Center>
        <div className='folders'>
          {ALIENGIRLS.map(({ src, style, ...props }) => (
            <Application key={props.id} src={folder} {...props}>
              <img src={src} style={style} />
            </Application>
          ))}
        </div>
        <QuizLayout>
          <Quiz />
        </QuizLayout>
      </Center>
    </Layout>
  );
}

export default Desktop;

const ALIENGIRLS = [
  {
    id: AppEnum.A1,
    name: 'A',
    defaultX: 511,
    defaultY: -573,
    src: artworkA,
    style: { width: '1666px', height: '1838px' },
  },
  {
    id: AppEnum.L2,
    name: 'L',
    defaultX: 175,
    defaultY: 781,
    src: artworkL,
    style: { width: '1195px', height: '990px' },
  },
  {
    id: AppEnum.I3,
    name: 'I',
    defaultX: 2665,
    defaultY: -434,
    src: artworkI,
    style: { width: '1389', height: '990px' },
  },
  {
    id: AppEnum.E4,
    name: 'E',
    defaultX: 3313,
    defaultY: 572,
    src: artworkE,
    style: { width: '1384px', height: '1123px' },
  },
  {
    id: AppEnum.N5,
    name: 'N',
    defaultX: 1588,
    defaultY: 1072,
    src: artwork5,
  },

  {
    id: AppEnum.G6,
    name: 'G',
    defaultX: 2442,
    defaultY: 439,
    src: artwork6,
  },
  {
    id: AppEnum.I7,
    name: 'I',
    src: artwork7,
  },
  {
    id: AppEnum.R8,
    name: 'R',
  },
  {
    id: AppEnum.L9,
    name: 'L',
  },
];
