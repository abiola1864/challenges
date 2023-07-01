import Link from "../components/Link";
import Light from "../components/Light";


export default function HomePage({lightsOnCount}) {



  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p>
    
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
