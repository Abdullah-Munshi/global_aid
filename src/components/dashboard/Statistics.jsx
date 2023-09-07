import React, { Fragment } from "react";

const Statistics = ({ total, text, styles }) => {
  const lines = text.split("%break%");
  const classes = `group rounded-10 shadow-one p-5 transition duration-300 bg-[#3F3578] relative after:w-full after:h-2/4 after:bg-gradient-two after:absolute after:top-1/2 after:start-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-10 after:z-0 hover:after:h-full after:transition-all after:duration-300 after:opacity-0 hover:after:opacity-100`;
  return (
    <div className={classes}>
      <h6 className="text-3xl leading-tight text-white font-bold mb-2 transition duration-200 group-hover:text-[#3A3559] relative z-10">
        <strong>{total}</strong>
      </h6>
      <p className="text-base leading-tight text-[#D2CCF7] group-hover:text-[#3A3559] transition duration-200 relative z-10">
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

export default Statistics;
