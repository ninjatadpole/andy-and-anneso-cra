import React from "react";

import DropCap from "../components/drop-cap";

export default {
  title: {
    en: "Andy & Anne-So - August 24th 2019",
    fr: "Anne-So & Andy - le 24 Août 2019"
  },
  line1: {
    en: "Come and join",
    fr: "Venez rejoindre"
  },
  line2: {
    en: <DropCap>Andy & Anne-So</DropCap>,
    fr: <DropCap>Anne-So & Andy</DropCap>
  },
  line3: {
    en: "to celebrate their wedding",
    fr: "pour leur mariage"
  },
  line4: {
    en: (
      <>
        <span className="no-wrap">
          24
          <sup>th</sup> August 2019
        </span>
      </>
    ),
    fr: (
      <>
        <span className="no-wrap">le 24 Août 2019</span>
      </>
    )
  }
};
