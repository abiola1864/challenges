import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxContainer from "../components/BoxContainer.js";


export default function HomePage() {
  return (
    <div>
       <BoxContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents isBlack={false} /> {/* Green box */}
      <BoxWithStyledComponents isBlack={true} /> {/* Black box */}
    
      </BoxContainer>
    </div>
  );
}
