import React, {useState, useEffect} from 'react';
import {Dimensions, View} from 'react-native';

import Landscape from './landscape';
import Portrait from './portrait';

const App = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const dim = Dimensions.get('screen');
    if (dim.height >= dim.width) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
    const onChange = ({screen}) => {
      if (screen.height >= screen.width) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };
    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {orientation === 'portrait' ? <Portrait /> : <Landscape />}
    </View>
  );
};

export default App;
