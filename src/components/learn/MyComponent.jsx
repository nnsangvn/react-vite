// JSX
// fragment
import './style.css';

const MyComponent = () => {
    return (
        //fragment
        <>
            <div> react component</div>
            <div className='child' style={{ borderRadius: "10px" }}>child</div>
        </>
    );
}

export default MyComponent;