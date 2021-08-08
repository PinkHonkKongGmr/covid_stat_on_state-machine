import { useCurrentSend } from "../../../entities/hooks/use-current-send";
import CountUp from "react-countup";

const CasesView = () => {
  const { confirmed, deaths, recovered } = useCurrentSend();
  return (
    <div>
      {" "}
      <div className="grid-col">
        <div style={{ fontSize: 20 }}>Confirmed cases</div>
        <h2 style={{ color: "rgb(189, 33, 48)" }}>
          <CountUp start={0} end={confirmed} duration={2} separator="." />
        </h2>
      </div>
      <div className="grid-col">
        <div style={{ fontSize: 20 }}>Deaths</div>
        <h2 style={{ color: "rgb(189, 189, 189)" }}>
          <CountUp start={0} end={deaths} duration={2} separator="." />
        </h2>
      </div>
      <div className="grid-col">
        <div style={{ fontSize: 20 }}>Recovered</div>
        <h2 style={{ color: "rgb(164, 201, 57)" }}>
          <CountUp start={0} end={recovered} duration={2} separator="." />
        </h2>
      </div>
    </div>
  );
};

export default CasesView;
