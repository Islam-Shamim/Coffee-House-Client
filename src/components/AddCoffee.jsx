import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.coffee.value;
        const prize = form.prize.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const user = {name,prize,supplier,taste,category,details,photo};
        console.log(user)

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }
  return (
    <div className="bg-red-50 p-20">
      <h2 className="text-3xl font-bold font-serif italic px-8 py-2">Add New Coffee</h2>
      <p>It is a cozy, often inviting place where people gather to enjoy freshly brewed coffee, teas, and light snacks. It typically features a casual atmosphere with comfortable seating, soft lighting, and sometimes free Wi-Fi, making it an ideal spot for socializing, working, or relaxing. Many coffee shops also offer specialty drinks, pastries, and a variety of beverages to cater to different tastes.</p>
      <form className="card-body" onSubmit={handleAddCoffee}>
        {/* coffee & prize */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="coffee"
              placeholder="Enter coffee name"
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
        {/* supplier & taste */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter supplier name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
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
        {/* photo */}
        <div className="form-control w-full mr-4">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo url"
            className="input input-bordered"
            required
          />
        </div>
        {/* button */}
        <input type="submit" value="Add Coffee" className="btn btn-primary mt-4"/>
      </form>
    </div>
  );
};

export default AddCoffee;
