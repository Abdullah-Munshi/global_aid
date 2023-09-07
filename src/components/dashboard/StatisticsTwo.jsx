import React, { Fragment } from "react";

const StatisticsTwo = ({ total, text }) => {
  const lines = text.split("%break%");
  return (
    <div className="">
      <h6 className="text-2xl leading-tight text-primary font-bold mb-2">
        {total}
      </h6>
      <p className="text-base font-normal leading-tight text-white">
        {lines.map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default StatisticsTwo;
