import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const CARTOONS = gql`
  {
    cartoons {
      name
      id
    }
  }
`;

class CartoonsClass extends Component {
  getCartoons = () => {
    const { data } = this.props;

    const { loading, cartoons } = data;

    if (loading) return <div>Loading...</div>;

    return cartoons.map(cartoon => {
      return <li key={cartoon.id}>{cartoon.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>{this.getCartoons()}</ul>
      </div>
    );
  }
}

export default graphql(CARTOONS)(CartoonsClass);
