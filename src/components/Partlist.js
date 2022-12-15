import React from 'react'


function Partlist({path,total,set}) {
  const bodyList = [];
  for (let i = 1; i < total; i++){
    bodyList.push(
      <img
        className="square"
        height={60}
        src={`./character/${path}/${i}.png`}
        alt=""
        onClick={()=>set(i)}
      />
    );
  }
  
  // console.log(bodyList);
  return (
    <div className="list">{bodyList}
    </div>
  );
}

export default Partlist