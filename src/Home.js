import styled from 'styled-components/macro';
import React, {useEffect, useState, Component} from 'react';

import './App';

export default function HomePage() {
  return (
    <div>
      <articel>{<p>Hallo</p>}</articel>
    </div>
  );
}

//export default HomePage;

/* const Headline = styled.h1`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  color: var(--primary);
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 3rem;
`; */

const Button = styled.button`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  border-radius: 2rem;
`;
