import React from "react";

import wands from "../wands";
import Wandsa from "./Wandsa";

function WandsList() {
  let wanding = wands.map((wands) => <Wandsa wand={wands} />);
  return <div class="Wand">{wanding}</div>;
}

export default WandsList;