import React from "react";
import { Connector } from "./connect";
import NarBar from "./NavBar/NavBar";
import Swap from "./Swap/Swap";
import { Route } from "react-router-dom";
import Liquidity from "./Liquidity/Liquidity";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  return library;
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Connector
        render={(network, setupConnection) => (
          <div>
            <NarBar />

            <Route exact path="/">
              <Swap network={network} setupConnection={setupConnection} />
            </Route>
            <Route exact path="/liquidity">
              <Liquidity network={network} setupConnection={setupConnection} />
            </Route>
          </div>
        )}
      ></Connector>
    </Web3ReactProvider>
  );
};

export default App;
