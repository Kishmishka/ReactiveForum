import React, {useState} from "react";

const Counter = () =>{
	const [count, setCount] = useState(0);

	function Increment () {
		setCount(count + 1)
	}

	function Decrement () {
		setCount(count - 1)
	}
	return(
		<div>
			<p>Count:{count}</p>
			
			
      	<button onClick = {Increment}>Increment</button>
			<button onClick = {Decrement}>Decrement</button>
		</div>	
	)
}

export default Counter