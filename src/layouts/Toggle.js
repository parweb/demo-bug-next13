'use client';

import { useState } from 'react';

export default async function Toggle() {
  const [toggle, setToggle] = useState(false);

  console.log({ toggle });

  return (
    <>
      <button onClick={() => setToggle(state => !state)}>hey</button>
      {toggle && <div>show me</div>}
    </>
  );
}
