import useIncrement from '../custom_hooks/useIncrement';

function Component1(){
    const { count, increase } = useIncrement();

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => increase(1)}>Add 1</button>
        </>
    );
}

export default Component1;