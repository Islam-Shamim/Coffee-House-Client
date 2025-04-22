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
    createSignIn(email, password)
      .then(result => {
        console.log(result.user);
        const lastLoggedIn = result.user?.metadata?.lastSignInTime;
        const user = {
          email,
          lastLoggedIn
        }
        fetch('http://localhost:5000/user', {
          method: 'PATCH',
          body: JSON.stringify(user),
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
      })
      .catch(error => {
        console.error(error)
      })
  };
  return (
    <div className="bg-base-200 min-h-screen my-4">
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold my-4">SignIn now!</h1>
      </div>
      <div className="card bg-base-100 w-1/2 mx-auto text-center shrink-0 shadow-2xl">
        <form className="card-body w-full" onSubmit={handleSignIn}>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
