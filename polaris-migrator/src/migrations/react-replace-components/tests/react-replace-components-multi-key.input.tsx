import React from 'react';
import {Text, TextContainer} from '@shopify/polaris';

const words = ['hello', 'world'];

export function App() {
  return (
    <TextContainer spacing="loose">
      {words.map((word) => (
        <Text key={word} as="p" variant="bodyLg">
          {word}
        </Text>
      ))}
    </TextContainer>
  );
}