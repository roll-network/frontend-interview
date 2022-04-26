import { useCallback, useEffect, useState } from "react";
import { ERC20__factory } from "roll-js-contracts/social-money/v1.5/contracts";
import { TOKEN_ADDR_SKULL } from "../constants";
import { useEthProvider } from "../providers/ethProvider";

export const Workspace = () => {
  const provider = useEthProvider();
  const [symbol, setSymbol] = useState("");

  const getToken = useCallback(async () => {
    try {
      if (!provider) return;
      const token = ERC20__factory.connect(TOKEN_ADDR_SKULL, provider); // create contract instance
      const symbol = await token.symbol(); // call contract function
      setSymbol(symbol);
    } catch (err) {
      console.error(err);
    }
  }, [provider]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <div>
      <p style={{ marginBottom: 48 }}>Hello, welcome to the Roll interview</p>
      <p>{symbol}</p>
    </div>
  );
};
