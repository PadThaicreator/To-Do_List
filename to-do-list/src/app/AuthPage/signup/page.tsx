'use client'

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUpPage(){
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label>Username</label>
                <input type="text" className="input-block" />
            </div>
            <div className="flex flex-col">
                <label>Email</label>
                <input type="email" className="input-block" />
            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <div className="flex items-center gap-2">
                    <input type={showPassword ? "text" : "password"} className="input-block flex-1" />
                    <Eye onClick={() => setShowPassword(!showPassword)}  className={`${showPassword ? "hidden" : ""}  cursor-pointer `}/>
                    <EyeOff onClick={() => setShowPassword(!showPassword)} className={`${showPassword ? "" : "hidden"} cursor-pointer `} />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Confirm Password</label>
                <div className="flex items-center gap-2">
                    <input type={showConfirmPassword ? "text" : "password"} className="input-block flex-1" />
                    <Eye  onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={`${showConfirmPassword ? "hidden" : ""} cursor-pointer`} />
                    <EyeOff onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={`${showConfirmPassword ? "" : "hidden"} cursor-pointer`} />
                </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer px-5">Sign Up</button>
                <button className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer px-5" onClick={() => window.history.back()}>Back</button>
            </div>
        </div>
    );
}