import SelectCountry from "../SelectCountry";
import styled from "styled-components";
import CasesView from "../CasesView";
import { MachineProvider } from "../../../App";
import { useContext } from "react";

const StatisticView = () => {
  const { current } = useContext(MachineProvider);

  return (
    <Wrapper>
      <SelectCountry />
      {current.context.countryStat && <CasesView />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  margin: 30px auto;
`;

export default StatisticView;
