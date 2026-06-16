import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openDeletePopUp } from "../Features/PopUpSlice";
import { showPopUp } from "../Features/PopUpSlice";
import { useSelector } from "react-redux";
import { fetchEmployees } from "../Features/EmployeeSlice";
import { useEffect } from "react";
import { editEmployee } from "../Features/EmployeeSlice";
import Layout from "./Layout";
const List = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);
  const loading = useSelector((state) => state.employee.loading);
  const error = useSelector((state) => state.employee.error);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <Layout>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {employees.map((employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </ul>
    </Layout>
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
