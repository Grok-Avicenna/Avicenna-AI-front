import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../registration/registr.css';

function SignFormforDoctor() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [photoData, setPhotoData] = useState(null);

    const onSubmit = (data) => {
        // Добавляем данные о фотографии к данным специалиста
        const doctorData = { ...data, photo: photoData };

        const savedData = localStorage.getItem("doctorRegistrationData");
        const doctorArray = savedData ? JSON.parse(savedData) : [];

        doctorArray.push(doctorData);
        localStorage.setItem("doctorRegistrationData", JSON.stringify(doctorArray));

        reset();
        navigate("/wrapper");
    };

    // Обработчик выбора файла
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPhotoData(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="font-sans w-full h-screen">
            <div className="flex flex-wrap max-md:block">
                <div className="classBg block max-md:hidden">
                    <div className="mt-24 ml-16">
                        <h1 className="text-4xl text-white font-extrabold underline">avicenna ai</h1>
                        <p className="text-2xl w-3/5 text-white font-bold mt-52">avicenna ai - Caring from a distance Professional medical care, wherever you are</p>
                        <img src={logo} alt="Avicenna AI Logo" className="colored-image" />
                    </div>
                </div>
                <div className="w-6/12 max-md:w-full">
                    <div className="flex flex-col items-center mt-20 max-md:m-0">
                        <h1 className="font-semibold text-5xl max-md:text-4xl max-md:mt-20 max-md:text-white">Create an account</h1>
                        <p className="text-slate-500 text-base mt-4 max-md:text-xs max-md:text-gray-300 cursor-pointer">Let’s get started with your 30 days free trial</p>
                        <form className="mt-16 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex gap-6'>
                                <label htmlFor="inputName" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Full Name</p>
                                    <input type="text" className='input-regist' id="inputName" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-red-500">Full name is required</span>}
                                </label>
                                <label htmlFor="inputSpecialization" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Specialization</p>
                                    <select id="specialties" className='input-regist' {...register("specialty", { required: true })}>
                                        <option value="" disabled>Выберите...</option>
                                        <option value="Кардиолог">Кардиолог</option>
                                        <option value="Дерматолог">Дерматолог</option>
                                        <option value="Эндокринолог">Эндокринолог</option>
                                        <option value="Гастроэнтеролог">Гастроэнтеролог</option>
                                        <option value="Гинеколог">Гинеколог</option>
                                        <option value="Невролог">Невролог</option>
                                        <option value="Онколог">Онколог</option>
                                        <option value="Офтальмолог">Офтальмолог</option>
                                        <option value="Ортопед">Ортопед</option>
                                        <option value="Педиатр">Педиатр</option>
                                        <option value="Психиатр">Психиатр</option>
                                        <option value="Пульмонолог">Пульмонолог</option>
                                        <option value="Радиолог">Радиолог</option>
                                        <option value="Ревматолог">Ревматолог</option>
                                        <option value="Хирург">Хирург</option>
                                        <option value="Уролог">Уролог</option>
                                    </select>
                                    {errors.specialty && <span className="text-red-500">Specialization is required</span>}
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <label htmlFor="inputCountry" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Country</p>
                                    <input type="text" className='input-regist' id="inputCountry" {...register("country", { required: true })} />
                                    {errors.country && <span className="text-red-500">Country is required</span>}
                                </label>
                                <label htmlFor="inputExperience" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Experience</p>
                                    <input type="number" className='input-regist' id="inputExperience" {...register("experience", { required: true })} />
                                    {errors.experience && <span className="text-red-500">Experience is required</span>}
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <label htmlFor="inputTime" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Work time: Ex(09:00-18:00)</p>
                                    <input type="text" className='input-regist' id="inputTime" {...register("time", { required: true })} />
                                    {errors.time && <span className="text-red-500">Time is required</span>}
                                </label>
                                <label htmlFor="inputPhoto" className="cursor-pointer block text-white text-base max-md:text-base mb-2">
                                    Add photo
                                    <input type="file" id="inputPhoto" onChange={handleFileChange} className="hidden" />
                                    {errors.photo && <span className="text-red-500">Photo is required</span>}
                                    <div className='w-[180px] h-[50px] border-[1px] border-black text-black pl-10 pt-3'><p>Send Photo</p></div>
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <label htmlFor="inputEmail" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Email</p>
                                    <input type="email" className='input-regist' id="inputEmail" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-red-500">Email is required</span>}
                                </label>
                                <label htmlFor="inputPassword" className="cursor-pointer">
                                    <p className="mt-1 max-md:text-base">Password</p>
                                    <input type="password" className='input-regist' id="inputPassword" {...register("password", { required: true })} />
                                    {errors.password && <span className="text-red-500">Password is required</span>}
                                </label>
                            </div>
                            <div className='flex gap-2'>
                                <NavLink to={'/'} className="w-full border-black border-2 text-black h-14 rounded-3xl mt-16 max-md:h-12 max-md:bg-white max-md:text-black text-center pt-3">
                                    I'm client
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

