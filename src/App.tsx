import { BowlingBall, Pins, Pin } from "songandverse";

function App() {
  return (
    <>
      <BowlingBall defaultHeight={100} width="100px" jump={false} />
      <br />
      <Pins>
        <Pin>{0}</Pin>
        <Pin>{1}</Pin>
        <Pin>{2}</Pin>
        <Pin>{3}</Pin>
      </Pins>
    </>
  );
}

export default App;
