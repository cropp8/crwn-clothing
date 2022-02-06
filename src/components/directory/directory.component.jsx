import { useContext } from 'react';
import DirectoryContext from '../../contexts/directory/directory.context';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
  <div className='directory-menu'>
    {sections.map(({ id, ...menuProps }) => (
      <MenuItem key={id} {...menuProps} />
    ))}
  </div>
);}

export default Directory;
