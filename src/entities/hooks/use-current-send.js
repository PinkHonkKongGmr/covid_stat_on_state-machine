import { MachineProvider } from "../../App";
import { useContext } from "react";
import { useActor } from "@xstate/react";

export const useCurrentSend = () => {
  const { current: baseCurrent } = useContext(MachineProvider);
  const [current] = useActor(baseCurrent.context.countryStat);
  const { confirmed, deaths, recovered } = current.context;
  return { confirmed, deaths, recovered };
};
