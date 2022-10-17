import styled from 'styled-components';
import { BoxShadowInner } from 'styles/BoxShadow.styled';

const Layout = styled.div`
  margin: 24px 0 0 0;
  padding: 100px 160px;
  width: 1550px;
  ${BoxShadowInner}
  background: #000;
  color: #fff;
`;

function Memo() {
  return (
    <Layout>
      <p>힌트</p>
      <ol>
        <li>외계인은 젤리를 좋아한다! 🍭 </li>
        <li>외계인은 노래 듣는 것을 좋아한다! 특히 2010년대 케이팝!! 💿💽📀</li>
        <li>외계인은 우리 주변 어디에나 있다! 👽💚</li>
      </ol>
    </Layout>
  );
}
export default Memo;
