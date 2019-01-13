import React from "react";

import "./blobs.scss";

export default function Blobs(props) {
  const blobColours = ["blue", "gold", "green", "purple"];
  const blobs = {};

  blobColours.forEach(colour => {
    blobs[colour] = ensureArray(props[colour]);
  });

  return (
    <div className="blobs">
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
