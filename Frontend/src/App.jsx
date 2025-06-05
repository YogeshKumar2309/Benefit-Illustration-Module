import { useState } from "react";
import Output from "./componets/Output";
import UserInput from "./componets/UserInput";


const App = () => {
   const [data, setData] = useState(null);
  return (
   <>
      {data === null ? (
        <UserInput onPremiumCalculated={setData} />
      ) : (
        <Output data={data} />
      )}
    </>
  );
};

export default App;
