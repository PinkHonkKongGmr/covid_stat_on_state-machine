import { Select } from "semantic-ui-react";
import { useCallback, useContext } from "react";
import { MachineProvider } from "../../../App";

const SelectCountry = () => {
  const { current, send } = useContext(MachineProvider);
  const selecthandler = useCallback(
    (e, data) => {
      send("SELECT", { name: data.value });
    },
    [send]
  );
  return (
    <Select
      onChange={selecthandler}
      placeholder="Select your country"
      options={current.context.listCountries.map((country) => {
        return { key: country.iso2, value: country.name, text: country.name };
      })}
    />
  );
};

export default SelectCountry;
