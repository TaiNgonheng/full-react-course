export function One() {
    return (
        <>
        <h1>Hello from One in export</h1>
        </>
    );
}
export function Two(){
    return (
      <>
      <h1>Hello from Two in export</h1></>
    );
}
export default function Onee(){
    function click(){
        alert("clicked");
    }
    return (
        <>
            <h1>hello world form main big</h1>
            <button onClick={click}>Click Me</button>
            
        </>
    );
}