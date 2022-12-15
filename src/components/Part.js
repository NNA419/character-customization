import React from 'react';

function Part({ zIndex ,index ,path }) {
  return (
      <img
        src={`https://character-customization.netlify.app/character/${path}/${index}.png`}
        alt=""
        width={260}
        style={{ zIndex, position: "absolute", left: 0, top: 0 }}
      />
  );
}

export default Part