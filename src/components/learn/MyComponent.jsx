// JSX
// fragment
import './style.css';

const MyComponent = () => {
    // const it = "1"; // string
    // const it = 22.2; // number

    //=> Khong tin ra giá trị
    // const it = true; //boolean
    // const it = undefined;
    // const it = null;

    // const it = [1, 2, 3];
    const it = {
        name: "child",
        age: 23
    }
    return (
        //fragment
        <>
            <div> {JSON.stringify(it)} & react </div>
            <div>{console.log("Sang")}</div>
            <div className='child' style={{ borderRadius: "10px" }}>child</div>
        </>
    );
}

export default MyComponent;