import { useSelector, useDispatch } from "react-redux";
import { LuDelete } from "react-icons/lu";
import { closePopUp } from "../Features/PopUpSlice";
import { useState, useEffect } from "react";
import {
  postEmployee,
  editEmployee,
  fetchEmployees,
} from "../Features/EmployeeSlice";

const EmployeePopUp = () => {
  const ispopUpOpen = useSelector((state) => state.popUp.openEmployeePopUp);
  console.log("ispopUpOpen", ispopUpOpen);

  const [formData, setFormData] = useState({
    profileUrl: "",
    name: "",
    email: "",
    highlight: false,
    bio: "",
  });

  console.log("Form Data", formData);

  useEffect(() => {
    console.log("UseEffect called with ispopUpOpen:", ispopUpOpen);
    if (!ispopUpOpen) {
      setFormData({
        profileUrl: "",
        name: "",
        email: "",
        highlight: false,
        bio: "",
      });
    } else if (ispopUpOpen && ispopUpOpen.id) {
      setFormData({
        profileUrl: ispopUpOpen.profileUrl ?? "",
        name: ispopUpOpen.name ?? "",
        email: ispopUpOpen.email ?? "",
        highlight: ispopUpOpen.highlighted ?? false,
        bio: ispopUpOpen.bio ?? "",
      });
    }
  }, [ispopUpOpen]);

  const handlePostEmployee = () => {
    if (ispopUpOpen && ispopUpOpen.id) {
      console.log("Editing employee with data:", formData);
      dispatch(
        editEmployee({ employeeId: ispopUpOpen.id, employeeData: formData }),
      );
      dispatch(closePopUp());
      dispatch(fetchEmployees());
    } else {
      console.log("Posting employee with data:", formData);
      dispatch(postEmployee(formData));
      dispatch(closePopUp());
      dispatch(fetchEmployees());
    }
  };

  const dispatch = useDispatch();
  if (!ispopUpOpen) {
    return null;
  }

  return (
    // Now will make a cross to close the pop up and will add functionality to close the pop up when we click on the cross button

    <div className="fixed h-full w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <button
        onClick={() => {
          console.log("clicked");
          dispatch(closePopUp());
        }}
        className="btn btn-ghost btn-circle absolute top-4 right-4 hover:bg-transparent"
      >
        <LuDelete className="text-white" />
      </button>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 h-auto">
        <label className="label">Profile URL</label>
        <input
          type="text"
          className="input"
          placeholder="Profile URL"
          value={formData.profileUrl}
          onChange={(e) =>
            setFormData({ ...formData, profileUrl: e.target.value })
          }
        />
        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label className="label">Bio</label>
        <textarea
          className="textarea"
          placeholder="Bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        ></textarea>

        <button className="btn btn-neutral mt-4" onClick={handlePostEmployee}>
          Submit
        </button>
      </fieldset>
    </div>
  );
};
export default EmployeePopUp;
