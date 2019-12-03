import React from "react";
import PropTypes from "prop-types";

import { gql } from "apollo-boost";

import { useQuery } from "@apollo/react-hooks";

const CHANNELS = gql`
  {
    channels {
      name
      id
    }
  }
`;

const ChannelOptions = ({ onChange }) => {
  const { loading, error, data } = useQuery(CHANNELS);

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        Sorry, there is an issue with the network. Please try after sometime.
        Thank you for your patience
      </div>
    );

  return (
    <>
      <select onChange={onChange} name="channelId">
        {data.channels.map(channel => {
          return (
            <option key={channel.id} value={channel.id}>
              {channel.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

ChannelOptions.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ChannelOptions;
