import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";


function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      massage: data.massage
    }
    try {
    await axios.post("https://getform.io/f/aolleeeb", userInfo)
    toast.success("Your message has been sent");
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }


  return (
    <>
      <div
        name="Contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <h1 className="text-3xl font-bold my-3">Contect me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/aolleeeb"
            // method="POST"
            className="bg-slate-200 sm:w-96 mx-auto p-4 md:p-8 rounded-md space-y-5 my-5"
          >
            <h1>Send Your Massage</h1>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                Full Name
              </label>
              <input
              {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your fullname"
                className="shadow w-full appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                Email Address
              </label>
              <input
              {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your email addres"
                className="shadow w-full appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                Full Name
              </label>
              <textarea
              {...register("massage", { required: true })}
                type="text"
                name="massage"
                id="massage"
                placeholder="Enter Your fullname"
                className="shadow w-full appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.massage && <span>This field is required</span>}
            </div>
            <button type="submit" className="px-3 py-2 bg-gray-800 text-white rounded-lg text-xl hover:bg-slate-600">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
