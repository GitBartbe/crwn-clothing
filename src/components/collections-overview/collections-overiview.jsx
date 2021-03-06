import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectCollecrionsForPreview } from "../../redux/shop/shop.selector.js";

import './collections-overiview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overiview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections:selectCollecrionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
