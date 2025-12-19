import React from "react";

import { Roboto,Poppins, Jockey_One } from "next/font/google";

// const roboto=Roboto({
//     weight:["100","200","300","400","500","600","700","800","900"],
//     subsets:["latin"]
// })
// const poppins=Poppins({
//     weight:["100","200","300","400","500","600","700","800","900"],
//     subsets:["latin"]
// })

// const jockey_one=Jockey_One({
//     weight:["400"],
//     subsets:["latin"]
// })

const FontExample = () => {
  return (
    <div>
      <h1 className={`text-4xl `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        quos?
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        assumenda nulla quis aperiam nostrum perferendis tempora aliquid at
        officiis debitis sequi dolores quos iste cum similique fugiat, ratione
        incidunt laudantium porro praesentium error! Ullam ex sunt, modi a
        expedita excepturi nemo earum fuga tempora provident quae officiis
        recusandae est id inventore perferendis dignissimos, delectus ea quos in
        maxime ratione possimus aliquam? Expedita veniam dolor at, officiis
        harum dolorem! Fugit inventore asperiores reprehenderit quibusdam? Quos
        corrupti quam sed maiores consequuntur deleniti.
      </p>
    </div>
  );
};

export default FontExample;
