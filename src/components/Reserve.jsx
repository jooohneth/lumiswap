import React from "react";

const Reserve = ({ reserve, symbol, format }) => {
  return (
    <div className="w-full mt-2 ml-2">
      <p className="font-poppins text-sm">
        {symbol && (
          <>
            <span className="font-semibold text-purple-3">{symbol}: </span>
            <span className="font-normal text-black">
              {format(reserve, symbol)}
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default Reserve;
