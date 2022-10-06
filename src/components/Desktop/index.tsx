import Application from 'components/Desktop/Application';
import { Layout, Left, Center } from 'components/Desktop/Desktop.styled';
import folder from 'assets/icons/folder.png';
import internet from 'assets/icons/internet.png';
import memo from 'assets/icons/memo.png';
import myComputer from 'assets/icons/my-computer.png';
import myMusic from 'assets/icons/music.png';
import myEarth from 'assets/icons/earth.png';

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
          <div>My Music</div>
        </Application>
        <Application id={5} src={myEarth} name='My Earth'>
          <div>My Earth</div>
        </Application>
      </Left>
      <Center>
        <Application id={6} src={folder} name='A'>
          <div>A</div>
        </Application>
        <Application id={7} src={folder} name='L'>
          <div>L</div>
        </Application>
        <Application id={8} src={folder} name='I'>
          <div>A</div>
        </Application>
        <Application id={9} src={folder} name='E'>
          <div>E</div>
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
