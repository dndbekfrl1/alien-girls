import Application from 'components/Common/Application';
import {
  Layout,
  Left,
  Center,
  QuizLayout,
} from 'components/Desktop/Desktop.styled';
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
import internetExplorer from 'assets/images/internet-explorer.gif';
import { AppEnum } from 'types/app';
import Memo from 'components/Memo';
import Quiz from 'components/Quiz';

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
        <Application id={AppEnum.Memo} src={memo} name='Memo'>
          <Memo />
        </Application>
        <Application
          id={AppEnum.MyComputer}
          src={myComputer}
          name='My Computer'
        >
          <div>My Computer</div>
        </Application>
        <Application id={AppEnum.MyMusic} src={myMusic} name='My Music'>
          <div>우웅</div>
        </Application>
        <Application id={AppEnum.MyEarth} src={myEarth} name='My Earth'>
          <div>My Earth</div>
        </Application>
      </Left>
      <Center>
        {ALIENGIRLS.map(({ src, style, ...props }) => (
          <Application key={props.id} src={folder} {...props}>
            <img src={src} style={style} />
          </Application>
        ))}
      </Center>
      <QuizLayout>
        <Quiz />
      </QuizLayout>
    </Layout>
  );
}

export default Desktop;

const ALIENGIRLS = [
  {
    id: AppEnum.A1,
    name: 'A',
    defaultX: 745,
    defaultY: 215,
    src: artworkA,
    style: { width: '1666px', height: '1838px' },
  },
  {
    id: AppEnum.L2,
    name: 'L',
    defaultX: 325,
    defaultY: 1450,
    src: artworkL,
    style: { width: '1195px', height: '990px' },
  },
  {
    id: AppEnum.I3,
    name: 'I',
    defaultX: 2837,
    defaultY: 448,
    src: artworkI,
    style: { width: '1389', height: '990px' },
  },
  {
    id: AppEnum.E4,
    name: 'E',
    defaultX: 3520,
    defaultY: 1860,
    src: artworkE,
    style: { width: '1384px', height: '1123px' },
  },
  {
    id: AppEnum.N5,
    name: 'N',
  },

  {
    id: AppEnum.G6,
    name: 'G',
  },
  {
    id: AppEnum.I7,
    name: 'I',
  },
  {
    id: AppEnum.R8,
    name: 'R',
  },
  {
    id: AppEnum.L9,
    name: 'L',
  },
  {
    id: AppEnum.S10,
    name: 'S',
  },
];
