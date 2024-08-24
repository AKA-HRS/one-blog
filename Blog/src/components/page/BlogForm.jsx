import React, { useState } from "react";
import cross from "../../assets/close.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBlogPanel } from "../../redux/slice/blogSlice";
import { setNav } from "../../redux/slice/navSlice";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const formFields = [
  {
    name: "author",
    label: "Author",
    type: "text",
    placeholder: "Author",
    required: true,
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Title",
    required: true,
  },
  {
    name: "content",
    label: "Content",
    type: "textarea",
    placeholder: "Introduction and Content",
    required: true,
    input_type: "react-quill",
  },
  {
    name: "ref",
    label: "Reference (URL) separated by (:,)",
    type: "textarea",
    placeholder: "Reference (URL)",
    required: true,
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: [
      { value: "", label: "Select Category" },
      { value: "Technology", label: "Technology" },
      { value: "Health", label: "Health" },
      { value: "Finance", label: "Finance" },
      { value: "Education", label: "Education" },
      { value: "Lifestyle", label: "Lifestyle" },
    ],
    required: true,
  },
];

export function BlogForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    ref: "",
    category: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleOnClose = () => {
    dispatch(setBlogPanel(false));
  };

  const handleFormData = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleQuillChange = (value) => {
    console.log("Editor content changed:", value); // Debugging line
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const addBlog = async () => {
    try {
      const response = await axios.post("/blog/create", formData);
      if (response.status === 201) {
        alert("Blog added successfully");
        setFormData({
          title: "",
          content: "",
          author: "",
          ref: "",
          category: "",
        });
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog");
    }
    finally{
      dispatch(setNav("/"));
      navigate("/");
    }
  };

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    addBlog();    
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <div className="fixed top-0 w-1/2 max-md:w-[100%] right-0 h-full bg-white shadow-lg z-[100] overflow-y-auto">
        <div className="p-4 relative">
          <button
            onClick={handleOnClose}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
          >
            <img src={cross} alt="Close" className="w-6 h-6" />
          </button>
        </div>
        <div className="p-5 space-y-5 flex-col flex">
          <h1 className="text-center text-3xl font-bold">Add Your Blog</h1>
          {formFields.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name}>
                {field.label}
                {field.required && (
                  <span className="text-red-600 font-bold">*</span>
                )}
              </label>
              {field.input_type === "react-quill" ? (
                <ReactQuill
                  value={formData[field.name]}
                  onChange={handleQuillChange}
                  className="w-full rounded-md shadow-sm bg-gray-300 resize-y min-h-[300px]" // Added resize and min height
                />
              ) : field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleFormData}
                  value={formData[field.name]}
                  className="p-2 w-full rounded-md shadow-sm bg-gray-300"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  onChange={handleFormData}
                  value={formData[field.name]}
                  className="p-2 w-full rounded-md shadow-sm bg-gray-300"
                >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleFormData}
                  value={formData[field.name]}
                  className="p-2 w-full rounded-md shadow-sm bg-gray-300"
                />
              )}
            </div>
          ))}
          <button
            onClick={handleConfirmation}
            className="w-44 py-4 px-8 text-nowrap rounded-md bg-blue-600 text-white font-bold"
          >
            Add Blog +
          </button>
        </div>
      </div>

      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleOnClose}
      ></div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[110]">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-bold">
              Do you really want to post this blog?
            </h2>
            <div className="flex justify-between">
              <button
                onClick={handleConfirm}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold"
              >
                Confirm
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-600 text-white px-4 py-2 rounded-md font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
