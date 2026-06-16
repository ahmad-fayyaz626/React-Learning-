import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openDeletePopUp } from "../Features/PopUpSlice";
import { showPopUp } from "../Features/PopUpSlice";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { editEmployee } from "../Features/EmployeeSlice";
const List = () => {
  const employees = useSelector((state) => state.employee.employees);
  const loading = useSelector((state) => state.employee.loading);
  const error = useSelector((state) => state.employee.error);
  const highlightedEmployees = employees.filter(
    (employee) => employee.highlighted,
  );

  if (highlightedEmployees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>No highlighted employees found.</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>There is some error</span>
      </div>
    );
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {highlightedEmployees.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />;
      })}
    </ul>
  );
};

const EmployeeCard = ({ employee }) => {
  const dispatch = useDispatch();
  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src={employee.profileUrl}
          alt={employee.name}
        />
      </div>
      <div>
        <div>{employee.name}</div>
        <div className="text-xs">{employee.email}</div>
      </div>
      <p className="list-col-wrap text-xs">{employee.bio}</p>
      <button
        onClick={() => dispatch(showPopUp(employee))}
        className="btn btn-square btn-ghost"
      >
        <MdEdit className="size-[1.2em]" />
      </button>
      <button
        onClick={() => dispatch(openDeletePopUp(employee.id))}
        className="btn btn-square btn-ghost"
      >
        <MdDelete className="size-[1.2em]" />
      </button>

      <button
        className="btn btn-square btn-ghost"
        onClick={() => {
          dispatch(
            editEmployee({
              employeeId: employee.id,
              employeeData: {
                ...employee,
                highlighted: !employee.highlighted,
              },
            }),
          );
        }}
      >
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill={employee.highlighted ? "currentColor" : "none"}
            stroke="currentColor"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </g>
        </svg>
      </button>
    </li>
  );
};

export default List;
