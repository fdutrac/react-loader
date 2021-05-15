import { useEffect, useState, useCallback } from "react";
import api from '../../../services/api';
import ContentLoader from '../../../ContentLoader';
import { Container }  from './style'

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
    <Container>
      <div className="content">
        <h1>Hello Gama Academy</h1>
        <h4>Veja esse macaquinho:</h4>
        <button onClick={handleSortImg}>Clique</button>
      </div>
      { isLoad ? (<ContentLoader/>) : (<img width="200px" height="auto" src={photo} alt="dog" />)}
    </Container>
    )
}

export default App;
