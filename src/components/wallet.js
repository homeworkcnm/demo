import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import "./wallet.css"
const Wallet = () => {
    return (
        <div className="functions1" style={{display: 'flex'}}>
        <span type="button" id="radix-:r1l" aria-haspopup="menu" aria-expanded="false" data-state="colsed" className="functions2 functions3 functions4 functions5">
          <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="functions6">
            <path d="M20 10.5c0 5.523-4.477 10-10 10s-10-4.477-10-10S4.477.5 10 .5s10 4.477 10 10z" fill="#F35165"></path>
            <g filter="url(#pols-power_svg__filter0_d_2328_40190)">
              <path d="M15.25 9H10.3l1.2-3.525c.225-.75-.675-1.35-1.275-.75l-6 6c-.45.45-.15 1.275.525 1.275H9.7l-1.2 3.525c-.
              225.75.675 1.35 1.275.75l6-6c.45-.45.15-1.275-.525-1.275z" fill="#fff"></path>
            </g>
          </svg>
          <span>0</span>
          <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" overflow="visible" class="sc-5f9839ce-0 jHukCg">
            <g fill="currentColor"><path d="M11.1 1.8l-7.5 6 1.8 2.4L12 5l6.6 5.2 1.8-2.4-7.5-6c-.5-.4-1.3-.4-1.8 0zM12 19.1l-6.6-5.2-1.8 2.4 7.5 6c.3.1.6.3.9.3.3 0 .6-.1.9-.3l7.5-6-1.8-2.4-6.6 5.2z"></path></g></svg>
          <FiChevronDown />
        </span>
      </div>
    );
  }
  
  export default Wallet;