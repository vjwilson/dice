import { useState, useReducer, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';

import AttributeCard from "../components/AttributeCard";
import { calculateCharacterClass } from "../utils/calculateCharacterClass";
import { updateAttributes } from "../utils/updateAttributes";
import { getRandomValue } from "../utils/getRandomValue";
import { getDiceTotal } from "../utils/getDiceTotal";

const attributesTemplate = [
  {
    name: "Strength",
    value: 0
  },
  {
    name: "Intelligence",
    value: 0
  },
  {
    name: "Wisdom",
    value: 0
  },
  {
    name: "Dexterity",
    value: 0
  },
  {
    name: "Constituion",
    value: 0
  },
  {
    name: "Charisma",
    value: 0
  }
];

const startingRolls = Array.from([1, 2, 3, 4, 5, 6], ()=> [0, 0, 0, 0]);

export default function CreateCharacter() {
  const [characterClasses, setCharacterClasses] = useState(['None']);
  console.log('characterClasses', characterClasses)
  const [seedRolls, setSeedRolls] = useState(startingRolls);
  const [attributes, dispatch] = useReducer(
    updateAttributes,
    attributesTemplate
  );

  function handleRollUpdate(rollName, newTotal) {
    dispatch({ name: rollName, total: newTotal });
  }

  function rollDice() {
    const allRolls = [];
    attributesTemplate.forEach((attr) => {
      const newRolls = [];
      for (let i = 0; i < 4; i++) {
        newRolls.push(getRandomValue(6));
      }
      allRolls.push(newRolls);
      const newTotal = getDiceTotal(newRolls);

      dispatch({ name: attr.name, total: newTotal });
    })
    setSeedRolls(allRolls);
  }

  useEffect(() => {
    const clasess = calculateCharacterClass(attributes);
    setCharacterClasses(clasess);
  }, [attributes]);

  return (
    <div className="container">
      <Head>
        <title>Create a Character</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
         Create a Character
        </h1>

        <p className="description" style={{ marginBottom: '.5rem' }}>
          Roll the dice to see your attributes
        </p>

        <button type="button" style={{ backgroundColor: '#0066FF', color: '#FFF', fontSize: '1.25rem', fontWeight: 'bold', padding: '.5em .75em' }}onClick={rollDice}>
          Roll all
        </button>

        <section style={{ display: "flex", flexDirection: "column", alignItems: 'center', flexWrap: 'wrap', marginBottom: ".5rem" }}>
          {<p style={{ margin: "1.5rem 0" }}>Recommended character classes: <span style={{ fontWeight: 'bold' }}>{characterClasses}</span></p>}
          <div style={{ display: "flex", justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {attributes.map((attr, i) => (
              <AttributeCard
                key={attr.name}
                name={attr.name}
                newRolls={seedRolls[i]}
                onUpdate={handleRollUpdate}
              />
            ))}
          </div>
        </section>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
