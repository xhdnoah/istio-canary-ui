"use client";

import { useState, useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Autocomplete,
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

interface IProps {
  boxType: string;
  namespace?: string;
  onUpdateData: (newData: string) => void;
}

const fetchNsList = () => {
  fetch("/api/").then();
};

const fetchSvcList = (ns: string) => {
  fetch("/api/").then();
};

export function ComboBox(props: IProps) {
  const [data, setData] = useState("");
  const [ns, setNs] = useState(props.namespace);
  const [dataList, setDataList] = useState(["web", "xyz", "ingress"]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setDataList(data));
  }, []);

  useEffect(() => {
    if (!props.namespace) {
      return;
    }
    if (props.namespace !== ns) {
      setNs(props.namespace);
    }
  }, [props.namespace]);

  return (
    <div>
      <Autocomplete
        id={`${props.boxType}-select`}
        sx={{ width: 150 }}
        options={dataList}
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label="namespace" variant="standard" />
        )}
      />
    </div>
  );
}

type TProps = {
  selectType: string
}
export function Selection(props: TProps) {
  const [val, setVal] = useState("");

  const items = ((typ: string) => {
    if (typ === "policy") {
      return ['traffic', 'user-agent', 'user-id']
    } else if (typ === "operation") {
      return ["is", "contains", "regex"]
    }
  })(props.selectType)

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="policy-select-label">PolicyName</InputLabel>
        <Select
          labelId="policy-select-label"
          value={val}
          label="policy"
          onChange={handleChange}
        ></Select>
        {items.map(item => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </FormControl>
    </Box>
  );
}

export function OperationSelection() {

}

export function ValueSelection() {

}