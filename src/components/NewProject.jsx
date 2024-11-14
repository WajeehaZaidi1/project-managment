import React, { useState } from "react";
import TextInput from "./ReusableComponents/TextInput";
import TextArea from "./ReusableComponents/TextArea";
import Button from "./ReusableComponents/Button";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function NewProject({ onAddProject }) {
  const navigate = useNavigate();

  const initialValues = {
    dueDate: "",
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    dueDate: Yup.string().required("Due date is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddProject(values);
    resetForm();
    navigate("/select-project");
  };

  return (
    <div className="p-6 bg-white text-stone-50">
      <h2 className="font-bold text-xl mb-4 text-stone-800">
        Create a New Project
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleReset, values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <menu className="flex justify-end mb-6">
              <Button
                type="submit"
                className="text-stone-800 hover:text-stone-950 px-2"
              >
                Submit Project
              </Button>
              <Button
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                type="reset"
              >
                Reset
              </Button>
            </menu>

            <label className="block text-sm mb-2 text-stone-800">
              Due Date
            </label>
            <TextInput
              name="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              placeholder="Enter due date"
              className="mb-4 text-stone-800"
            />
            <ErrorMessage
              name="dueDate"
              component="div"
              className="text-red-600 text-xs"
            />

            <label className="block text-sm mb-2 text-stone-800">Title</label>
            <TextInput
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className="mb-4 text-stone-800"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-600 text-xs"
            />

            <label className="block text-sm mb-2 text-stone-800">
              Description
            </label>
            <TextArea
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Enter project description"
              className="mb-4 text-stone-800"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600 text-xs"
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default NewProject;
