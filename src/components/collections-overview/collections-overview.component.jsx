import { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections.context';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
  const collectionsObj = useContext(CollectionsContext);
  const collections = Object.keys(collectionsObj).map(
    (key) => collectionsObj[key]
  );

  return (
  <div className='collections-overview'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);}

export default CollectionsOverview;