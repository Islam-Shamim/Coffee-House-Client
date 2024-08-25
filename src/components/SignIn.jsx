import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const { createSignIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createSignIn(email,password)
    .then(result =>{
      console.log(result.user);
      const lastLoggedIn = result.user?.metadata?.lastSignInTime;
        const user ={
          email,
          lastLoggedIn
        }
        fetch('https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/user',{
          method:'PATCH',
          body:JSON.stringify(user),
          headers:{
            'content-type' : 'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
    })
    .catch(error=>{
        console.error(error)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignIn now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body w=3/4" onSubmit={handleSignIn}>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
