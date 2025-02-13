import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { photo, details, name, prize, _id } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete confirm.");
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(coffee=>coffee._id!==_id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-300 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="md:flex  w-full px-4 ">
        <div className="w-1/2">
          <h2 className="font-bold"> {name}</h2>
          <p>{details}</p>
          <p className="font-semibold">Prize : ${prize}</p>
        </div>
        <div className=" w-1/2 card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn btn-warning">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-success">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees:PropTypes.object,
  setCoffees:PropTypes.object
};

export default CoffeeCard;
