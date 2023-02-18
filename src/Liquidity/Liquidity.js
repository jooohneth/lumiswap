import { useState } from "react";

import SwitchButton from "./SwitchButton";
import LiquidityDeployer from "./LiquidityDeployer";
import LiquidityRemover from "./RemoveLiquidity";

function Liquidity(props) {
  const [deploy, setDeploy] = useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return (
        <LiquidityDeployer
          network={props.network}
          setupConnection={props.setupConnection}
        />
      );
    }
    return (
      <LiquidityRemover
        network={props.network}
        setupConnection={props.setupConnection}
      />
    );
  };

  return (
    <div>
      <SwitchButton setDeploy={setDeploy} />
      {deploy_or_remove(deploy)}
    </div>
  );
}

export default Liquidity;
