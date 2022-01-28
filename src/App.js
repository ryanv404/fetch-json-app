import Header from './Header';
import ContentList from './ContentList';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [data, setData] = useState('');
  const [resType, setResType] = useState('users');

  const handleButtonColor = (btn_name) => {
    const btnList = document.querySelectorAll('button');
    for (let btn of btnList) {
      if (btn.className === btn_name) {
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        btn.disabled = true;
      } else {
        btn.style.backgroundColor = 'lightgray';
        btn.style.color = 'black';
        btn.disabled = false;
      }
    }
  }
  
  useEffect(() => {
    const loadData = async (resource) => {
      try {
        const response = await fetch(`${API_URL}${resource}`);
        if (!response.ok) throw new Error('Response status code was outside of 200-299.');
        const jsonData = await response.json();
        setData(jsonData);
        handleButtonColor(resource);
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    }
    loadData(resType);
  }, [resType]);
  
  return (
    <div className="App">
      <Header setResType={setResType} />
      <ContentList jsonData={data} />
    </div>
  );
};

export default App;
