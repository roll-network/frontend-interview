import { ethers } from "ethers";
import React, { createContext, useContext, useEffect, useState } from "react";
import { config } from "../config";

interface ProviderContext {
  provider: ethers.providers.BaseProvider | null;
}

const ProviderCtx = createContext<ProviderContext>({
  provider: null,
});

export const useEthProvider = () => {
  const ctx = useContext(ProviderCtx);
  return ctx.provider;
};

export const EthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [provider, setProvider] =
    useState<ethers.providers.BaseProvider | null>(null);

  useEffect(() => {
    const p = new ethers.providers.InfuraProvider(
      "homestead",
      config.infuraProjectID
    );
    setProvider(p);
  }, []);

  return (
    <ProviderCtx.Provider value={{ provider }}>{children}</ProviderCtx.Provider>
  );
};
