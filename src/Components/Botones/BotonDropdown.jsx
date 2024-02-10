import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'
import './BotonDropdown.css';

export const BotonDropdown = () => {
  return (
    <div><Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Géneros Literarios
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item href="#Romance">Romance</Dropdown.Item>
<Dropdown.Item href="#Thriller">Thriller</Dropdown.Item>
<Dropdown.Item href="#Biografias">Biografias</Dropdown.Item>
<Dropdown.Item href="#Fantasia">Fantasia</Dropdown.Item>
</Dropdown.Menu>
</Dropdown></div>
  )
}
