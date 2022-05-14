import { useState } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
display: grid;
justify-content: center;
align-content: center;
align-items: center;
height: 100vh;
}
`;

const Counter = () => {
  const [clicks, setCash] = useState(0);
  return (
    <StyledCounter>
      <h2>Bank Account: ${clicks.toLocaleString()} </h2>
      <button type="button" onClick={() => setCash(clicks + 1000000)}>
        Get Rich! 💰
      </button>
    </StyledCounter>
  );
};

export default Counter;
