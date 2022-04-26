import React, { createContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ERC20__factory } from "roll-js-contracts/social-money/v1.5/contracts";
import { ethers } from "ethers";
import { config } from "./config";
import { EthProvider } from "./providers/ethProvider";
import { Workspace } from "./components/workspace";

function App() {
  return (
    <EthProvider>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Workspace />
      </div>
    </EthProvider>
  );
}

export default App;
