import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/api/v1/users/admin/${user._id}`).then((res) => {
      const data = res.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`${user.name} is an Admin Now!`);
        refetch();
      }
    });
  };

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/api/v1/users/${user._id}`).then((res) => {
          const data = res.data;
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - All Users</title>
      </Helmet>
      <section>
        <SectionTitle heading="MANAGE ALL USERS" subheading="How many?" />
        <div className="bg-white mx-16 p-10">
          <h2 className="text-3xl font-bold mb-4">
            Total Users: {users.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#D1A054] text-white font-semibold text-center">
                <tr className="h-16 rounded-lg">
                  <th>#</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="text-center" key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn bg-[#D1A054] "
                        >
                          <FaUsers className="text-white text-xl" />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="text-red-500 text-lg btn btn-ghost"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllUsers;
