import Header from './components/Header';
import Input from './components/Input';
import Tags from './components/Tags'; // Import the Tags component
import { useState } from 'react';

function App() {
  const [tags, setTags] = useState([]);

  return (
    <div className="App">
      <Header />
      <Input setTags={setTags} />
      {tags.map((tag, index) => (
        <Tags
          key={index} 
          tag={tag.tag.en}
          confidence={tag.confidence}
        />
      ))}
    </div>
  );
}

export default App;