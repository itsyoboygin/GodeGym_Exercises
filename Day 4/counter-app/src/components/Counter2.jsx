import useIncrement from '../custom_hooks/useIncrement';

function Component2(){
    const { count, increase } = useIncrement();

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => increase(2)}>Add 2</button>
        </>
    );
}

export default Component2;