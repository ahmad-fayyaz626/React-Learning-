import { useSelector, useDispatch } from "react-redux";
import { closeDeletePopUp } from "../Features/PopUpSlice";
import { deleteEmployee } from "../Features/EmployeeSlice";

const DeletePopUp = () => {
  const deletePopUP = useSelector((state) => state.popUp.deletePopUP);
  console.log(deletePopUP);
  const dispatch = useDispatch();
  if (!deletePopUP) return null;

  return (
    <div className="fixed h-full w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Delete</h2>
          <p>
            Are you sure you want to delete this employee? This action cannot be
            undone.
          </p>
          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(deleteEmployee(deletePopUP));
                dispatch(closeDeletePopUp());
              }}
            >
              Yes
            </button>
            <button
              onClick={() => dispatch(closeDeletePopUp())}
              className="btn btn-primary"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
