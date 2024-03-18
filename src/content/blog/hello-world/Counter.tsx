import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          console.log('Incrementing count');
          setCount(count + 1);
        }}
        type="button"
      >
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} type="button">
        Decrement
      </button>
    </div>
  );
}

export default Counter;
