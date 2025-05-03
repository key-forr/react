import { useState } from "react";
import { UsersType } from ".";
import React from "react";

function findMax(users: UsersType) {
  console.log("call func");
  if (!users) return null;

  let maxPair = users[0];

  for (let i = 0; i < users.length; i++) {
    if (users[i][0] > maxPair[0] && users[i][1] > maxPair[1]) {
      maxPair = users[i];
    }
  }

  return maxPair;
}

function App({ users }: { users: UsersType }) {
  console.log("APP RENDERING");
  //debugger;
  /*При такій реалізації, користувачі будуть постійно рендеритись, тому якщо об'кт складніший за виклик функції,
   краще використовувати варіант нижче*/
  // let maxPair = findMax(users);
  // if (!maxPair) maxPair = [10, 10];

  // let [player1Count, setPlayer1Count] = useState(maxPair[0]);
  // let [player2Count, setPlayer2Count] = useState(maxPair[0]);

  let [player1Count, setPlayer1Count] = useState(() => {
    let maxPair = findMax(users);
    if (!maxPair) maxPair = [10, 10];
    return maxPair[0];
  });

  let [player2Count, setPlayer2Count] = useState(() => {
    let maxPair = findMax(users);
    if (!maxPair) maxPair = [10, 10];
    return maxPair[1];
  });

  return (
    <div>
      <div>
        <div>keyforr</div>
        <div>{player1Count}</div>
        <button onClick={() => setPlayer1Count((actual) => actual + 1)}>
          +
        </button>
      </div>
      <hr />
      <div>
        <div>ddayeena</div>
        <div>{player2Count}</div>
        <button onClick={() => setPlayer2Count((actual) => actual + 1)}>
          +
        </button>
      </div>
      <hr />
      <button
        onClick={() => {
          setPlayer1Count((actual) => actual - 1);
          setPlayer2Count((actual) => actual - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setPlayer1Count(10);
          setPlayer2Count(10);
        }}
      >
        reset
      </button>
    </div>
  );
}

function App_({ users }: { users: UsersType }) {
  console.log("APP RENDERING");
  let [player1Counter, setPlayer1Counter] = useState(10);
  console.log("actual player 1 value:" + player1Counter);
  let [player2Counter, setPlayer2Counter] = useState(10);

  // let [counter, setCounters] = useState({
  //   c1: 10,
  //   c2: 10,
  // });

  return (
    <div>
      <div>
        <div>keyforr</div>
        <div>
          {
            player1Counter
            //counter.c1
          }
        </div>
        <button
          onClick={() => {
            console.log(player1Counter);
            setPlayer1Counter((actual) => actual + 1); //Правильно
            console.log(player1Counter);
            //debugger;

            // setCounters((actual) => {
            //   return { ...actual, c1: actual.c1 + 1 };
            // });
          }}
        >
          +
        </button>
      </div>
      <hr />
      <div>
        <div>ddayeena</div>
        <div>
          {
            player2Counter
            //counter.c2
          }
        </div>
        <button
          onClick={() => {
            // setPlayer2Counter(player2Counter + 1); //Не правильно
            setPlayer2Counter((actual) => actual + 1); //Правильно

            // setCounters((actual) => {
            //   return { ...actual, c2: actual.c2 + 1 };
            // });
          }}
        >
          +
        </button>
      </div>
      <hr />
      <button
        onClick={() => {
          setPlayer2Counter(player2Counter - 1);
          setPlayer1Counter(player1Counter - 1);
          // setCounters((actual) => {
          //   return { ...actual, c2: actual.c2 - 1, c1: actual.c1 - 1 };
          // });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setPlayer2Counter(10);
          setPlayer1Counter(10);
          // setCounters((actual) => {
          //   return { ...actual, c1: 10, c2: 10 };
          // });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default App;
