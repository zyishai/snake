import React from 'react';
import styled from 'styled-components';
import { Grid } from './Grid';

const AppShell = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => (
  <AppShell>
    <Grid />
  </AppShell>
)

export default App;
