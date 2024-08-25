import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Users = () => {
    const loadedUser = useLoaderData();
    const [users,setUsers] = useState(loadedUser);

    const handleDelete = id =>{
        fetch(`https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/user/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                    const remaining = users.filter(user=>user._id !== id);
                    setUsers(remaining)
                  });
            }
        })
    }

    return (
        <div>
            <h2>Users : {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>LogInTime</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=><tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdTime}</td>
            <td>{user.lastLoggedIn}</td>
            <td>
                <button onClick={() => handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;