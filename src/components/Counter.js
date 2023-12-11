import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';
function Counter({ count, increment, decrement }) {
    // Remove the following line as you are already receiving `count` as a prop
    // const [count, setCount] = useState(0);

    const handleIncrement = () => {
        increment(); // Assuming your increment action does not take any arguments
    };

    const handleDecrement = () => {
        decrement(); // Assuming your decrement action does not take any arguments
    };

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
