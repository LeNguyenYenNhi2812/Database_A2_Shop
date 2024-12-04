import React from "react";
import {
  LocalShipping,
  International,
  Warehouse,
  AquaDataApproved,
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>
      {props.product.AquaData_approved ? (
        <span className="shop-card-product-features" title="AquaData Aproved">
          <AquaDataApproved />
          {props.showText ? (
            <span className="feature-text">AquaData Aproved</span>
          ) : null}
        </span>
      ) : null}
      {props.product.fulfilled_by_AquaData ? (
        <span className="shop-card-product-features" title="Fullfiled By AquaData">
          <Warehouse />
          {props.showText ? (
            <span className="feature-text">Fullfiled By AquaData</span>
          ) : null}
        </span>
      ) : null}
      {props.product.shipped_from_abroad ? (
        <span
          className="shop-card-product-features"
          title="International Shipping"
        >
          <International />
          {props.showText ? (
            <span className="feature-text">Shipped From Abroad</span>
          ) : null}
        </span>
      ) : (
        <span className="shop-card-product-features" title="Local Shipping">
          <LocalShipping />
          {props.showText ? (
            <span className="feature-text">Local Shippping</span>
          ) : null}
        </span>
      )}
    </React.Fragment>
  );
};

export default ProductFeatures;
