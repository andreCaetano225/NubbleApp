import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text/Text';




function App(): JSX.Element {



  return (
    <SafeAreaView>
      <Text preset='headingMedium' italic>
        Texto do Dede
      </Text>

      <Text preset='headingLarge' >
        Texto sem font
      </Text>


    </SafeAreaView>
  );
}



export default App;
