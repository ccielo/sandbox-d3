import React, { useRef, useEffect, useState } from "react";
import { select, line, curveLinear } from "d3";
import styled from "styled-components";

const Wrapper = styled.svg`
  background-color: grey;
`;


function App() {
  const svgRef = useRef();
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  useEffect(() => {
    const svg = select(svgRef.current);
    const Line = line()
      .x((value, index) => index * 50)
      .y(value => 150 - value)
      .curve(curveLinear);

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => Line(value))
      .attr("fill", "none")
      .attr("stroke", "blue");

  }, [data]);

  return (
    <>
      <Wrapper ref={svgRef} />
      <button onClick={() => setData(data.map(value => value + 5))}>
        update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        filter data
      </button>
    </>
  );
}

export default App;
