import { useEffect, useState, useCallback } from "react";
import api from './services/api';
import ContentLoader from './ContentLoader';

const App: React.FC = () => {
  const [photo, setPhoto ] = useState<string>('');
  const [isLoad, setIsLoad ] = useState<boolean>(false);

  const handleSortImg: any = useCallback(() => {
    console.log(photo)
    setIsLoad(true);
    api.get('').then(
      response => {
        setPhoto(response.data.message)
        setIsLoad(false);
      }
    )
  }, [photo])

  useEffect(() => {
    setIsLoad(true);
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    )
  }, []);
  
  return (
    <div>
      <div>
        <h1>Hello Gama Academy</h1>
        <h4>Veja esse macaquinho:</h4>
        <button onClick={() => handleSortImg()}>Clique</button>
      </div>
      <img width="200px" height="auto" src={photo} alt="dog" />
      { isLoad && (<ContentLoader/>)}
    </div>
    )
}

export default App;
