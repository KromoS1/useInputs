import { styled } from 'styled-components';
import './App.css'
import { UsingHook } from './usingHook';
import { UnUsingHook } from './unUsingHook';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 500px;
  width: 600px;
`;

function App() {

  return (
    <Container>
      <UsingHook/>
      {/* <UnUsingHook/> */}
    </Container>
  );
}



export default App
