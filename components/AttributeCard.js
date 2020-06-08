import React, { useState, useEffect } from "react";
import Die from "./Die";
import { getRandomValue } from "../utils/getRandomValue";
import { getDiceTotal } from "../utils/getDiceTotal";

export default function AttributeCard({ name, newRolls = [0, 0, 0, 0], onUpdate }) {
    const [rolls, setRolls] = useState(newRolls);
    const startingTotal = newRolls.reduce((a, b) => a + b);
    const [total, setTotal] = useState(startingTotal);

    useEffect(() => {
        setRolls(newRolls);

        const newTotal = getDiceTotal(newRolls);
        setTotal(newTotal);
    }, newRolls);

    function handleRolls() {
        const newRolls = [];
        for (let i = 0; i < 4; i++) {
            newRolls.push(getRandomValue(6));
        }
        setRolls(newRolls.sort().reverse());
        const newTotal = getDiceTotal(newRolls);
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
