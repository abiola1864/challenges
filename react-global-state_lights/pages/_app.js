import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
// import { uid } from 'uid';

const initialLight = [
  { id: 1, name: 'Living Room', isOn: false },
  { id: 2, name: 'Kitchen', isOn: false },
  { id: 3, name: 'Bedroom', isOn: false },
  { id: 4, name: 'Bathroom', isOn: false },
  { id: 5, name: 'Garage', isOn: false },
  { id: 6, name: 'Porch', isOn: false },
  { id: 7, name: 'Garden', isOn: false },
  { id: 8, name: 'Office', isOn: false },
];

// import HomePage from ".";

export default function App({ Component, pageProps }) {
  
  const [lights, setLights] = useState(initialLight);
  const lightsOnCount = lights.filter((light) => light.isOn).length;

const toggleLight = (id) => {
  setLights((prevLights) => {
    const updatedLights = prevLights.map((light) => {
      if (light.id === id) {
        return { ...light, isOn: !light.isOn };
      }
      return light;
    });
    return updatedLights;
  });
};


return (
  <Layout>
    <GlobalStyle />
    {/* <Rooms lights={lights} toggleLight={toggleLight} /> */}
    {/* <HomePage lights={lights} setLights={setLights} /> */}
    <Component lights={lights}
     setLights={setLights}
     lightsOnCount ={lightsOnCount}
     toggleLight={toggleLight}
     
     {...pageProps} />
  </Layout>
);
}
 
