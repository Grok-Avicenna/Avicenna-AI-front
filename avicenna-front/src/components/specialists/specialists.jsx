import React, { useState, useEffect } from 'react';
import HeaderComponent from "../header/header";

export default function SpecialistsList() {
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem("doctorRegistrationData");
        if (savedData) {
            setSpecialists(JSON.parse(savedData));
        }
    }, []);

    const handleContact = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="w-full h-screen bg-[#010E54]">
            <HeaderComponent />
            <div className="w-[80%] m-auto flex flex-wrap gap-10">
                {specialists.length > 0 ? (
                    specialists.map((specialist, index) => (
                        <div key={index} className="w-[353px] h-[450px] bg-white rounded-[50px] flex flex-col items-center overflow-hidden mt-16">
                            <div className="rounded-img" style={{ backgroundImage: `url(${specialist.photo})` }}></div>
                            <h1 className="mt-[25px] text-[20px]">{specialist.name}</h1>
                            <div className="flex gap-2 mt-5">
                                <span>{specialist.country},</span>
                                <span> Стаж: {specialist.experience} лет</span>
                            </div>
                            <div className="w-[204px] h-[40px] bg-[#0855B1] pt-1 rounded-[20px] mt-6 text-white flex justify-center">{specialist.specialty}</div>
                            <button className="bg-[#0855B1] text-white w-full h-[78px] outline-none mt-[55px] text-[20px]" onClick={() => handleContact(specialist.email)}>Обратиться</button>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center w-full mt-16">Нет зарегистрированных специалистов</p>
                )}
            </div>
        </div>
    );
}
