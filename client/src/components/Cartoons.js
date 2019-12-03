import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const CARTOONS = gql`
  {
    cartoons {
      name
      id
      genre
    }
  }
`;

const Cartoons = () => {
  const { loading, error, data } = useQuery(CARTOONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div>
      <ul className={`cartoon-list`}>
        {data.cartoons.map(cartoon => {
          return (
            <li className={`cartoon`} key={cartoon.id}>
              {cartoon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cartoons;
