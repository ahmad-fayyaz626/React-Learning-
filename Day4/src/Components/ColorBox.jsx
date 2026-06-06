
const ColorBox = ({color}) => {
    return <div style={{ backgroundColor: color }} className="w-40 border-2 h-40 rounded-3xl mt-4 text-center content-center text-black-50">{color.toUpperCase()}</div>;
};

export default ColorBox;
