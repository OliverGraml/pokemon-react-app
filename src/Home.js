import styled from 'styled-components/macro';
import React, { useEffect, useState } from "react";

 function Home() {


    return (
    <div>
        <Headline> Pokemon React App</Headline>
        <section>
        <Home />
        <App />
    </section>
    </div>
    )
}

export default Home;

const Headline = styled.h1`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  color: var(--primary);
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 3rem;
`;


const Button = styled.button`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  border-radius: 2rem;
`;
