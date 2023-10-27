import React, { useState } from 'react';

export function Header() {
  const [value, setValue] = useState('List');
  return <h1>{value}</h1>;
}
