import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, counting) => (
      counting = counting + 1,
      <div key={item.text} key={item.heading} className={`column is-6 article-${counting}`}>
        <p>{counting}</p>
        <section className="section">
          <div className="has-text-centered">
            <div
              className={`featured-image-${counting}`}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <article className={`article article-${counting}`}>
            <h2>Blah</h2>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
          </article>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.heading,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
