import propTypes from 'prop-types';
// import { Children } from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
