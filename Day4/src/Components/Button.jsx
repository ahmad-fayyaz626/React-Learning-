const Button = ({text , func })=>{

    const setColor = ()=>{
        func(text);
    }
    return <button style={{ backgroundColor: text }} className=" self-center bg-blue-500 text-white px-4 py-2 rounded " onClick={setColor}>{text}</button>
}

export default Button;
