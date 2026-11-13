import { useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import bg1 from "../assets/bglogin.png";
import Particles from "./Particles";
import { useAuth } from "../AuthContext";

interface FormData {
  email: string;
  password: string;
}

const DEMO_EMAIL = "user@example.com";
const DEMO_PASSWORD = "User1234";
const DEMO_TOKEN = "local-demo-session";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: DEMO_EMAIL,
      password: DEMO_PASSWORD,
    },
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data: FormData) => {
    if (data.email !== DEMO_EMAIL || data.password !== DEMO_PASSWORD) {
      toast.error("Invalid email or password.");
      return;
    }

    sessionStorage.setItem("user", JSON.stringify({ email: DEMO_EMAIL, role: "user" }));
    login(DEMO_TOKEN);
    navigate("/os");
  };

  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center font-inter no-scrollbar"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
        />

        <div className="flex flex-col justify-center items-center text-white z-50 w-full max-w-md px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5 rounded-2xl px-8 py-10 backdrop:blur-xl bg-gradient-to-tl from-red-600/80 to-black/60 shadow-2xl shadow-blue-400"
          >
            <span className="text-center md:text-5xl text-4xl font-bold">Login!</span>

            <label htmlFor="email" className="border-b border-gray-700 flex items-center gap-2 pb-2">
              <MdAlternateEmail className="text-lg md:text-3xl" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: "Email is required" })}
                className="bg-transparent outline-none w-full"
                placeholder="Email"
              />
            </label>
            {errors.email && <span className="text-blue-400 text-xs">{errors.email.message}</span>}

            <label htmlFor="password" className="border-b border-gray-700 flex items-center gap-2 pb-2">
              <IoLockClosedSharp className="text-lg md:text-3xl" />
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: "Password is required" })}
                className="bg-transparent outline-none w-full"
                placeholder="Password"
              />
            </label>
            {errors.password && <span className="text-blue-400 text-xs">{errors.password.message}</span>}

            <div className="pt-5 w-full flex items-center justify-center">
              <input
                type="submit"
                value="Login"
                className="w-60 px-4 py-2 rounded bg-[#e62727] hover:bg-[#fb6363] text-white cursor-pointer shadow-2xl shadow-black"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </>
  );
}
