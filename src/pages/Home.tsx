import { useQuery } from "react-query";

import { User } from "../models/User";
import Card from "../components/card";

const Home = () => {
  const { data } = useQuery<User[]>("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((d) => (
        <Card key={d.id} {...d} />
      ))}
    </div>
  );
};

export default Home;
