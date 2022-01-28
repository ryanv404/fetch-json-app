import Header from './Header';
import ContentList from './ContentList';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [data, setData] = useState('');

  const handleButtonColor = (btn_name) => {
    const btnList = document.querySelectorAll('button');
    for (let btn of btnList) {
      if (btn.className === btn_name) {
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
      } else {
        btn.style.backgroundColor = 'lightgray';
        btn.style.color = 'black';
      }
    }
  }

  const loadData = async (resource) => {
    try {
      const url = API_URL + resource;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network error.');
      const jsonData = await response.json();
      setData(jsonData);
      handleButtonColor(resource);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  
  useEffect(() => {
    loadData('users');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="App">
      <Header loadData={loadData} />
      <ContentList jsonData={data} />
    </div>
  );
};

export default App;
