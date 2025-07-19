'use client'
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

  const handleLogin = () => {

    router.push("/Homepage/home");
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label>Email</label>
        <input type="email" className="input-block" />
      </div>
      <div className="flex items-center gap-2">
                    <input type={showPassword ? "text" : "password"} className="input-block flex-1" />
                    <Eye onClick={() => setShowPassword(!showPassword)}  className={`${showPassword ? "hidden" : ""}  cursor-pointer `}/>
                    <EyeOff onClick={() => setShowPassword(!showPassword)} className={`${showPassword ? "" : "hidden"} cursor-pointer `} />
    </div>
      <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleLogin}>Login</button>
      <div className="mt-4 flex justify-center items-center">
        <p className="text-sm">
          Don't have an account?{" "}
          <a href="/AuthPage/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
