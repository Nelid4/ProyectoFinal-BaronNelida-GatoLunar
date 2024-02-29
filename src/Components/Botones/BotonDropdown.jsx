import Dropdown from 'react-bootstrap/Dropdown';
import './BotonDropdown.css';
import { NavLink } from 'react-router-dom';

export const BotonDropdown = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Géneros Literarios
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropDownMenu'>
          <Dropdown.Item>
            <NavLink to="/genre/Romance" className="botonLibro2">Romance</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/genre/Thriller" className="botonLibro2">Thriller</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/genre/Biografia" className="botonLibro2">Biografías</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/genre/Fantasia" className="botonLibro2">Fantasía</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
