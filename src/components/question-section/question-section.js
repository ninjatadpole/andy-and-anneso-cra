import React from "react";
import classnames from "classnames";

import Translation from "../translation";
import sizedArray from "../../utils/sized-array";

import "./question-section.scss";

export default function QuestionSection(props) {
  const { dictionary, count } = props;
  return (
    <div className={classnames("question-section", props.className)}>
      <Translation tag="h2" id={dictionary} />
      <dl>
        {sizedArray(count).map((x, i) => {
          const lookup = `${dictionary}.items[${i}]`;
          return (
            <React.Fragment key={`qa-${i}`}>
              <Translation tag="dt" id={`${lookup}.q`} />
              <Translation tag="dd" id={`${lookup}.a`} />
            </React.Fragment>
          );
        })}
      </dl>
      {props.children}
    </div>
  );
}
