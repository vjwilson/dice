import React, { useState, useEffect } from "react";
import Die from "./Die";
import { getRandomValue } from "../utils/getRandomValue";

export default function AttributeCard({ name, onUpdate }) {
    const [rolls, setRolls] = useState([0, 0, 0, 0]);
    const [total, setTotal] = useState(0);

    function handleRolls() {
        const newRolls = [];
        for (let i = 0; i < 4; i++) {
            newRolls.push(getRandomValue(6));
        }
        setRolls(newRolls.sort().reverse());
        const newTotal = newRolls
            .slice()
            .sort()
            .slice(1)
            .reduce((a, b) => a + b, 0);
        setTotal(newTotal);
        onUpdate(name, newTotal);
    }

    return (
        <div
            style={{
                border: "1px solid",
                display: "flex-column",
                padding: ".5rem"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: ".5em"
                }}
            >
                <h2>{name}</h2>
                <span style={{ fontSize: "1.5em" }}>{total}</span>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                {rolls.map((roll, i) => (
                    <Die initialValue={roll} key={`${roll}-${i}`} slash={i === 3} />
                ))}
            </div>
            <p>
                <button type="button" onClick={handleRolls}>
                    Roll
        </button>
            </p>
        </div>
    );
}
