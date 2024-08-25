import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const createdTime = result.user.metadata.creationTime;
        console.log(result.user);
        const user = {email,createdTime};
        fetch("https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/user",{
          method:"POST",
          body: JSON.stringify(user),
          headers:{
            'content-type' : 'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.acknowledged){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User added successfully.",
              showConfirmButton: false,
              timer: 1500
            });
            form.reset();
          }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body w=3/4" onSubmit={handleSignUp}>
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
