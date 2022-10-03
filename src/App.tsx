import Layout from 'components/Common/Layout.index';
import TaskBar from 'components/Common/TaskBar';
import Desktop from 'components/Desktop';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <>
          <Desktop />
          <TaskBar />
        </>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
