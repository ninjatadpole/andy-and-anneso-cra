import React from "react";
import classnames from "classnames";

import "./blobs.scss";

export default function Blobs(props) {
  const blobColours = ["paper", "gold", "green", "purple"];
  const blobs = {};

  blobColours.forEach(colour => {
    blobs[colour] = ensureArray(props[colour]);
  });

  return (
    <div className={classnames("blobs", props.className)}>
      {blobColours.map(colour => {
        if (blobs[colour]) {
          return blobs[colour].map(version => {
            return (
              <div
                className={`blob blob-${version} blob-${version}-${colour}`}
                key={`blob-${version}-${colour}`}
              />
            );
          });
        }

        return null;
      })}
      {props.children}
    </div>
  );
}

function ensureArray(item) {
  if (Array.isArray(item) || !item) {
    return item;
  } else {
    return [item];
  }
}
