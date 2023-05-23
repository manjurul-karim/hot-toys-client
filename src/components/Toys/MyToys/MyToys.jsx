import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { authContext } from "../../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  useTitle("My Toys");

  const { user } = useContext(authContext);
  const [addedToys, setAddedToys] = useState([]);

  useEffect(() => {
    // if (user && user.email) {
    const url = `https://a10-hot-toys-server-manjurul-karim.vercel.app/addedtoys?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedToys(data))
      .catch((error) => console.error(error));
    // }
  }, [user]);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Sub Category</th>
              <th>Seller Name</th>
              <th>seller email</th>
              <th>Delete/update</th>
            </tr>
          </thead>
          <tbody>
            {addedToys.map((toys) => (
              <MyToysRow key={toys._id} toys={toys}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
