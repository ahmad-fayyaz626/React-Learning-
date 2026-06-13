import { useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">Contact Page</h1>
      {id && <p>Contact ID: {id}</p>}
    </div>
  );
};

export default Contact;
