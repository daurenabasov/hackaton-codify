import React from 'react';

const Wave = () => {
    return (
        <div>
            <svg
                class="css-waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                    <path
                        id="wave-pattern"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    ></path>
                </defs>
                <g class="animated-waves">
                    <use href="#wave-pattern" x="48" y="1" fill="rgb(0, 0, 255,0.5)"></use>
                    <use href="#wave-pattern" x="48" y="3" fill="rgb(106, 90, 205,0.6)"></use>
                    <use href="#wave-pattern" x="48" y="7" fill="rgb(0, 0, 255,0.4)"></use>
                </g>
            </svg>
        </div>
    );
};

export default Wave;