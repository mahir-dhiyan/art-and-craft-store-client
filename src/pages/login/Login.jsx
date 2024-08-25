import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authproviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaRegEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { GithubAuthProvider } from "firebase/auth";


const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const notifyError = () => {
        toast.error('Incorrect Email or Password. Check Again!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    };
    // --------------------------Sign in with google--------------------------------
    const signInWithGoogle =()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
          // The signed-in user info.
        //   const user = result.user;
        // console.log(result.user);
        setUser(result.user);
        navigate(location?.state ? location.state : '/');
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
        console.error(error);
        });
    }
    // -------------------------Sign in with Github-------------------------------
    const signInWithGithub =()=>{
        signInWithPopup(auth, gitprovider)
        .then((result) => {

            setUser(result.user);
            navigate(location?.state ? location.state : '/');
        }).catch((error) => {

          console.error(error);
        });

    }




    // ----------------------------Sign in with email-------------------------------------
    const { signIn,setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                // console.log(result.user);

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                notifyError();

            })

    }
    return (


        <div className="h-screen md:grid md:grid-cols-5">
            <Helmet>
                <title>Login-Wovenwood</title>
            </Helmet>
            <div className="col-span-4 ">
            <div className="bg-[#ECECF2] text-center mt-4 dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] ">
                <h2 className="text-5xl font-semibold"><span className="text-[#C56652]">Login</span> with Email</h2>
            </div>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className=" relative flex items-center">
                            <input
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className="input  w-full input-bordered pr-10"
                                required /><FaRegEye onClick={() => setShowPass(!showPass)} className="text-2xl  absolute right-3 cursor-pointer" />
                                </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white text-xl border-none bg-[#a95543]">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold dark:text-fuchsia-50 text-lg mt-4">Do not have an account? <Link to="/register" className="font-bold text-[#a95543] text-2xl  hover:text-white">Register</Link></p>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"

                />
            </div>
            <div className="space-y-4 p-4 md:p-0">
                <h3 className="text-3xl font-bold dark:text-fuchsia-50 text-center mt-6 md:mt-28">Alternative Login</h3>
                <button onClick={signInWithGoogle} className="btn btn-outline w-full font-bold border-2 text-[#a95543] h-20 text-lg "> <FaGoogle /> Sign in with Google</button>
                <button onClick={signInWithGithub} className="btn btn-outline w-full font-bold border-2 text-[#a95543] h-20 text-lg "> <FaGithub className="text-xl" /> Sign in with Github</button>
            </div>
        </div>
    );
};

export default Login;