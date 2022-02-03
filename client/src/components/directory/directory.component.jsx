import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...menuProps }) => (
      <MenuItem key={id} {...menuProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
