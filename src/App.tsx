import { useState } from "react";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Venue from "./components/Venue";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import FAQ from "./components/FAQ";
/*import Footer from "./components/Footer";*/

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {!isOpened && <Envelope onComplete={() => setIsOpened(true)} />}

      {isOpened && (
        <>
          <Hero />
          <Countdown />
          <Venue />
          <Schedule />
          <Gallery />
          <RSVP />
          <FAQ />
        </>
      )}
    </>
  );
}

export default App;
