import { Button, DatePicker } from 'antd';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>

      <div className="App-button">
        <Button type="primary">PRESS ME</Button>
        <DatePicker placeholder="select date" />
      </div>

    </div>
  );
}

export default App;
