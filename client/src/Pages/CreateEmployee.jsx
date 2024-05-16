import React, { useState } from "react";

const CreateEmployee = () => {

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    avatar: ""
  });
  const [courses, setCourses] = useState([]);
  const [avatar, setAvatar] = useState(null);


  const handleCourses = (e) => {
    if (e.target.checked) {
      courses.push(e.target.value);
    } else {
      const index = courses.indexOf(e.target.value);
      if (index !== -1) {
        courses.splice(index, 1);
      }
    }
  }

  const handleInputChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      setAvatar(result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setAvatar(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    console.log(courses);
    console.log(avatar);
  }

  return (
    <div className="flex w-full items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Mobile no:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile no" name="mobile" onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">Designation:</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="designation"
            name="designation"
            value={formdata.designation}
            onChange={handleInputChange}
          >
            <option value="hr">Hr</option>
            <option value="manager">Manager</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Gender:</p>
          <input className="mr-2 leading-tight"
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleInputChange}
          />
          <label className="mr-8" htmlFor="male">Male</label>
          <input className="mr-2 leading-tight"
            type="radio" id="female"
            name="gender"
            value="female"
            onChange={handleInputChange} />
          <label htmlFor="female">Female</label>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Courses:</p>
          <input className="mr-2 leading-tight"
            type="checkbox"
            name="courses"
            value="mca"
            id="mca"
            onChange={handleCourses} />
          <label className="mr-8" htmlFor="mca">MCA</label>
          <input className="mr-2 leading-tight"
            type="checkbox"
            name="courses"
            value="bca"
            id="bca"
            onChange={handleCourses}
          />
          <label className="mr-8" htmlFor="bca">BCA</label>
          <input className="mr-2 leading-tight"
            type="checkbox"
            name="courses"
            value="bsc"
            id="bsc"
            onChange={handleCourses}
          />
          <label className="mr-8" htmlFor="bsc">BSC</label>
        </div>
        <div>
          <label className="mr-8" htmlFor="avatar">
            <div className="text-center p-2 rounded-sm border border-black">
              Click here to Upload your image
            </div>
          </label>
          <input className="mr-2 leading-tight hidden"
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleAvatarChange}
          />

          {avatar ?
            <div className="h-28 aspect-auto">
              <img draggable="false" src={avatar} alt="Image" className="w-full h-full object-contain" />
            </div>
            :
            <></>
          }
        </div>
        <button type="submit"
          className="bg-blue-600 text-white p-2 mx-auto block my-2"
        >Create employee</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
