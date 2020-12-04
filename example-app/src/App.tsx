import React from 'react';
import './App.css';

import { Button, Card } from '@agro1/react-components';

function App() {
  return (
    <div className="example">
      <p>Para Testar Componentes</p>
      <Card>
        <Button label="Click me" className="p-button-success" />
      </Card>
    </div>
  );
}

export default App;
