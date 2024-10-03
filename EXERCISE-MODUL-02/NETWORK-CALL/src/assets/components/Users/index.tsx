import { useState, useEffect } from "react";
import axios from "axios";
import IUser from "../../interfaces/user.interface";

function Home() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://66fd3d81c3a184a84d199b16.mockapi.io/api/v1/gguser"
      );

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="">
      <div>
        <table className="min-w-full border-collapse bg-[#414142] text-white">
          <thead>
            <tr className="bg-[#414142]">
              <th className="border bg-[#414142] px-4 py-2 text-left">Name</th>
              <th className="border bg-[#414142] px-4 py-2 text-left">Email</th>
              <th className="border bg-[#414142] px-4 py-2 text-left">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item) => (
              <tr key={item.id} className="bg-[#414142]">
                <td className="border border-gray-300 px-4 py-2">
                  {item.fullname}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.password}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
