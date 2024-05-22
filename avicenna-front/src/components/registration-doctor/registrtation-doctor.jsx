import React from 'react';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

import '../registration/registr.css';


function SignFormforDoctor() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem("formData");
        return savedData ? JSON.parse(savedData) : {};
    });

    const navigate = useNavigate();

    useEffect(() => {
    }, [data]);

    const onSubmit = (formData) => {
        setData(formData);
        console.log(formData);
        reset();
        navigate("/wrapper");
    };

    return (
        <div className="font-sans  w-full h-screen">
            <div className="flex flex-wrap max-md:block">
                <div className="classBg block max-md:hidden">
                    <div className="mt-24 ml-16">
                        <h1 className="text-4xl text-white font-extrabold underline">avicenna ai</h1>
                        <p className="text-2xl w-3/5 text-white font-bold mt-52">avicenna ai - Caring from a distance Professional medical care, wherever you are  </p>
                        <img src={logo} alt="" className="colored-image" />
                    </div>
                </div>
                <div className="w-6/12 max-md:w-full ">
                    <div className="flex flex-col items-center mt-20 max-md:m-0">
                        <h1 className="font-semibold text-5xl max-md:text-4xl max-md:mt-20 max-md:text-white">Create an account</h1>
                        <p className=" text-slate-500 text-base mt-4 max-md:text-xs max-md:text-gray-300 cursor-pointer">Let’s get started with your 30 days free trial</p>
                        <form className="mt-16 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex gap-6'>
                                <label htmlFor="inputEmail" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Name</p>
                                    <input type="email" className='input-regist' id="inputName" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-red-500">Name is required</span>}
                                </label>
                                <label htmlFor="inputEmail" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Specialization</p>
                                    <input type="text" className='input-regist' id="inputSpecialist" {...register("specialization", { required: true })} />
                                    {errors.specialization && <span className="text-red-500">Specialization is required</span>}
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <label htmlFor="inputPassword" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Country</p>
                                    <input type="text" className='input-regist' id="inputCountry" {...register("country", { required: true })} />
                                    {errors.country && <span className="text-red-500">Country  is required</span>}
                                </label>
                                <label htmlFor="inputPassword" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Experience</p>
                                    <input type="text" className='input-regist' id="inputExperience" {...register("experience", { required: true })} />
                                    {errors.experience && <span className="text-red-500">Experience  is required</span>}
                                </label>

                            </div>
                            <div className='flex gap-6'>
                                <label htmlFor="inputPassword" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Email</p>
                                    <input type="email" className='input-regist' id="inputEmail" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-red-500">Email  is required</span>}
                                </label>
                                <label htmlFor="inputPassword" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Password</p>
                                    <input type="text" className='input-regist' id="inputPassword" {...register("password", { required: true })} />
                                    {errors.password && <span className="text-red-500">Password  is required</span>}
                                </label>
                            </div>

                            <div className='flex gap-2'>
                                <NavLink to={'/'} className="w-full border-black border-2 text-black h-14 rounded-3xl mt-16 max-md:h-12 max-md:bg-white max-md:text-black text-center pt-3">
                                    <button type="submit" >I'm client</button>
                                </NavLink>

                                <button type="submit" className="w-full bg-black text-white h-14 rounded-3xl mt-16 max-md:h-12 max-md:bg-white max-md:text-black" disabled={Object.keys(errors).length > 0}>Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignFormforDoctor;
