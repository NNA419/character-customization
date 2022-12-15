import React from 'react'
import PartAvatar from "./Part";
function Avatar({
  body,
  eyes,
  hair,
  clothing1,
  clothing2,
  clothing3,
  mouth,
  eyebrows,
  glasses,
}) {
  return (
    <div className="avatar">
      <PartAvatar path="body" index={body} zIndex={0} />
      <PartAvatar path="eyes" index={eyes} zIndex={1} />
      <PartAvatar path="hair" index={hair} zIndex={6} />
      <PartAvatar path="clothes/layer_1" index={clothing1} zIndex={2} />
      <PartAvatar path="clothes/layer_2" index={clothing2} zIndex={3} />
      <PartAvatar path="clothes/layer_3" index={clothing3} zIndex={4} />
      <PartAvatar path="mouths" index={mouth} zIndex={4} />
      <PartAvatar path="noses" index={1} zIndex={4} />
      <PartAvatar path="eyebrows" index={eyebrows} zIndex={4} />
      <PartAvatar path="accessories/glasses" index={glasses} zIndex={5} />
    </div>
  );
}

export default Avatar;