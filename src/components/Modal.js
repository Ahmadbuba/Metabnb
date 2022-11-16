import React, { useState } from "react";
import ReactDOM from "react-dom";
import connect from "../../src/assests/modal/1.png";
import cat from "../../src/assests/modal/2.png";
import x from "../../src/assests/modal/x.png";
import move from "../../src/assests/modal/move.png";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="fixed inset-0 bg-gray z-50" onClick={props.toogleModal} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 max-w-lg rounded-lg z-50 font-sora">
        <div className="w-11/12 mx-auto">
          <div className="py-5 flex justify-between">
            <h4 className=" font-bold text-lg text-anotherBlack">
              Connect Wallet
            </h4>
            <button onClick={props.toogleModal}>
              <img src={x} />
            </button>
          </div>
        </div>
        <hr className=" bg-midGray h-0.5" />
        <div className="w-11/12 mx-auto py-3">
          <p className="py-3 font-red-rose font-normal">
            Choose your preffered wallet:
          </p>
          <button
            type="button"
            className="flex items-center justify-between w-full border border-midGray py-1 my-1 rounded-md hover:bg-lightGray font-semibold text-base"
          >
            <div className="flex items-center gap-3">
              <img src={cat} className="ml-3" />
              Metamask
            </div>
            <img src={move} className="width-full object-cover mr-4" />
          </button>
          <button
            type="button"
            className="flex items-center justify-between w-full border border-midGray py-1 my-1 rounded-md hover:bg-lightGray font-semibold text-base"
          >
            <div className="flex items-center gap-3">
              <img src={connect} className="ml-4" /> walletConnect
            </div>
            <img src={move} className="width-full object-cover mr-4" />
          </button>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
