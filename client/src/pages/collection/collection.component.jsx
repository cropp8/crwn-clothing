import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = () => {
  const params = useParams();
  const collection = useSelector(selectCollection(params.collectionId));
  const { title, items } = collection;

  return (
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className="items">
      {
        items.map(item => <CollectionItem key={item.id} item={item} />)
      }
    </div>
  </div>
);}

export default CollectionPage;