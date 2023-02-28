import { useState } from "react";

import Switch from "../components/Switch";
import AddLiquidity from "./AddLiquidity";
import RemoveLiquidity from "./RemoveLiquidity";

function Liquidity(props) {
  const [deploy, setDeploy] = useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return (
        <AddLiquidity
          network={props.network}
          setupConnection={props.setupConnection}
        />
      );
    }
    return (
      <RemoveLiquidity
        network={props.network}
        setupConnection={props.setupConnection}
      />
    );
  };

  return (
    <div>
      <Switch setDeploy={setDeploy} />
      {deploy_or_remove(deploy)}
    </div>
  );
}

export default Liquidity;
