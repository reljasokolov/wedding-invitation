import { useState } from "react";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {!isOpened ? (
        <Envelope onComplete={() => setIsOpened(true)} />
      ) : (
        <>
          <Hero />
          <Countdown />
          <Venue />
          <Gallery />
          <RSVP />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
