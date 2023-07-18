import { useState } from "react";

interface buttonProps {
  number: Number;
  content: String;
  handleClick: (item: Number) => void;
}

function Button({ number, content, handleClick }: buttonProps) {
  return (
    <button
      onClick={() => {
        handleClick(number);
      }}
    >
      {content}
    </button>
  );
}

function App() {
  const [square, setSquare] = useState([Array(9).fill(null)]);
  const [value, setValue] = useState("X");
  const [count, setCount] = useState(0);

  let handleSelectItem = (number: Number) => {
    if (square[0][+number] || calculateWinner()) {
      return;
    }
    setCount(count + 1);
    setValue(count % 2 !== 0 ? "X" : "O");
    setSquare([...square]);
    square[0][+number] = value;
  };

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        square[0][a] &&
        square[0][a] == square[0][b] &&
        square[0][a] == square[0][c]
      ) {
        return square[0][a];
      }
    }
    return null;
  }

  let winner = "Winner " + calculateWinner();
  let write = calculateWinner() ? winner : "Next player:" + value;

  const goToGameStart = () => {
    setCount(0);
    setValue("X");
    setSquare([Array(9).fill(null)]);
  };

  return (
    <div className="parent">
      <h3>{write}</h3>
      <button onClick={goToGameStart}>Go to game start</button>

      <div className="box">
        <Button
          number={0}
          content={square[0][0]}
          handleClick={handleSelectItem}
        />
        <Button
          number={1}
          content={square[0][1]}
          handleClick={handleSelectItem}
        />
        <Button
          number={2}
          content={square[0][2]}
          handleClick={handleSelectItem}
        />
        <Button
          number={3}
          content={square[0][3]}
          handleClick={handleSelectItem}
        />
        <Button
          number={4}
          content={square[0][4]}
          handleClick={handleSelectItem}
        />
        <Button
          number={5}
          content={square[0][5]}
          handleClick={handleSelectItem}
        />
        <Button
          number={6}
          content={square[0][6]}
          handleClick={handleSelectItem}
        />
        <Button
          number={7}
          content={square[0][7]}
          handleClick={handleSelectItem}
        />
        <Button
          number={8}
          content={square[0][8]}
          handleClick={handleSelectItem}
        />
      </div>
    </div>
  );
}

export default App;
