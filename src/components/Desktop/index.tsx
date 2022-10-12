import Application from 'components/Desktop/Application';
import { Layout, Left, Center } from 'components/Desktop/Desktop.styled';
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
import Music from 'components/Sound';

function Desktop() {
  return (
    <Layout>
      <Left>
        <Application id={1} src={internet} name='Internet Explorer'>
          <div>internet explorer</div>
        </Application>
        <Application id={2} src={memo} name='Memo'>
          <div>memo</div>
        </Application>
        <Application id={3} src={myComputer} name='My Computer'>
          <div>My Computer</div>
        </Application>
        <Application id={4} src={myMusic} name='My Music'>
          <div>우웅</div>
        </Application>
        <Application id={5} src={myEarth} name='My Earth'>
          <div>My Earth</div>
        </Application>
      </Left>
      <Center>
        <Application id={6} src={folder} name='A' defaultX={745} defaultY={215}>
          <img
            src={artworkA}
            alt=''
            style={{ width: '1666px', height: '1838px' }}
          />
        </Application>
        <Application
          id={7}
          src={folder}
          name='L'
          defaultX={325}
          defaultY={1450}
        >
          <div>
            <img
              src={artworkL}
              alt=''
              style={{ width: '1195px', height: '990px' }}
            />
          </div>
        </Application>
        <Application
          id={8}
          src={folder}
          name='I'
          defaultX={2837}
          defaultY={448}
        >
          <img
            src={artworkI}
            alt=''
            style={{ width: '1389', height: '990px' }}
          />
        </Application>
        <Application
          id={9}
          src={folder}
          name='E'
          defaultX={3520}
          defaultY={1860}
        >
          <img
            src={artworkE}
            alt=''
            style={{ width: '1384px', height: '1123px' }}
          />
        </Application>
        <Application id={10} src={folder} name='N'>
          <div>N</div>
        </Application>
        <Application id={11} src={folder} name='G'>
          <div>G</div>
        </Application>
        <Application id={12} src={folder} name='I'>
          <div>I</div>
        </Application>
        <Application id={13} src={folder} name='R'>
          <div>R</div>
        </Application>
        <Application id={14} src={folder} name='L'>
          <div>L</div>
        </Application>
      </Center>
    </Layout>
  );
}

export default Desktop;
