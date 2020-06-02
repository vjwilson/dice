import React from "react";
import { getRandomValue } from "../utils/getRandomValue";

function Die({ initialValue, slash }) {
    return (
        <div style={{ width: "132px", height: "132px" }}>
            <svg
                width="264"
                height="264"
                viewBox="0 0 264 264"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="none" d="M-1-1h266v266H-1z" />
                <g>
                    <rect
                        stroke="currentColor"
                        strokeWidth="7"
                        fill="none"
                        rx="68"
                        height="256"
                        width="256"
                        y="4"
                        x="4"
                    />
                    <text
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontSize="250"
                        y="219.453"
                        x="66"
                        fillOpacity="null"
                        strokeOpacity="null"
                        strokeWidth="0"
                        fill="currentColor"
                        stroke="currentColor"
                        cursor="move"
                    >
                        {initialValue}
                    </text>
                    {slash && (
                        <line
                            x1="243"
                            y1="21"
                            x2="21"
                            y2="243"
                            strokeWidth="8"
                            stroke="currentColor"
                        />
                    )}
                </g>
            </svg>
        </div>
    );
}

export default Die;
