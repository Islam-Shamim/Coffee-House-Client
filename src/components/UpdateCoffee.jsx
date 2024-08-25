import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name } = coffee;

  const handleUpdate = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.coffee.value;
    const prize = form.prize.value;
    const category = form.category.value;
    const details = form.details.value;
    const coffee = {name,prize,category,details};
    console.log(coffee);

    fetch(`https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/coffee/${_id}`,{
        method:"PUT",
        body:JSON.stringify(coffee),
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            Swal.fire({
                title: 'Update!',
                text: 'Coffee Update Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  }
  return (
    <div className="bg-red-50 p-20">
      <h2 className="text-3xl font-bold font-serif italic px-8 py-2">Update coffee : {name}</h2>
      <form className="card-body" onSubmit={handleUpdate}>
        {/* coffee & prize */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="coffee"
            //   defaultValue={name}
              placeholder="Update coffee name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee Prize</span>
            </label>
            <input
              type="text"
              name="prize"
              placeholder="Enter coffee prize"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* category & details */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/*Update button */}
        <input type="submit" value="Update Coffee" className="btn btn-primary mt-4"/>
      </form>
    </div>
  );
};

export default UpdateCoffee;
