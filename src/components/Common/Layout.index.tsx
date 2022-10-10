import styled from 'styled-components';

interface Props {
  children: React.ReactElement;
}

const LayoutLayout = styled.div`
  height: 100vh;
`;

function Layout({ children }: Props) {
  return <LayoutLayout>{children}</LayoutLayout>;
}
export default Layout;
