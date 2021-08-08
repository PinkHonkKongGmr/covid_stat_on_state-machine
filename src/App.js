import StatisticView from "./feautures/molecules/StatisticView";
import React, { createContext } from "react";
import { useMachine } from "@xstate/react";
import { covidMachine } from "./entities/state-machines/covid-machine";

export const MachineProvider = createContext();

function App() {
  const [current, send] = useMachine(covidMachine);
  return (
    <MachineProvider.Provider value={{ current, send }}>
      <div className="App">
        <StatisticView />
      </div>
    </MachineProvider.Provider>
  );
}

export default App;
