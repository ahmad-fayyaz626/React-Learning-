const Result = ({score , totalQuestions})=>{

    return <div className="w-120 h-80 bg-gray-100 rounded-lg p-6 m-auto mt-6 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Your Score: {score} / {totalQuestions}</h1>
        <p className="text-lg">Thank you for playing the quiz!</p>
    </div>
    

}


export default Result;