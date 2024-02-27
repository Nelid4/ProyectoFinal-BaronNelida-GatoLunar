import Dropdown from 'react-bootstrap/Dropdown';
import './BotonDropdown.css';
import { NavLink } from 'react-router-dom';

export const BotonDropdown = () => {
  return (
    <div><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Géneros Literarios
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropDownMenu'>
        <Dropdown.Item ><NavLink to="/condition/Romance" className="botonLibro2">Romance</NavLink> </Dropdown.Item>
        <Dropdown.Item > <NavLink to="/condition/Thriller" className="botonLibro2">Thriller</NavLink></Dropdown.Item>
        <Dropdown.Item > <NavLink to="/condition/Biografia" className="botonLibro2">Biografías</NavLink></Dropdown.Item>
        <Dropdown.Item > <NavLink to="/condition/Fantasia" className="botonLibro2">Fantasia</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
  )
}
