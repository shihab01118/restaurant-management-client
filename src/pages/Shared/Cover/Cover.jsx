import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({ coverBg, title, description }) => {
  return (
    <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={coverBg}
        bgImageAlt="cover"
        strength={300}
    >
        <div
      className="hero h-[600px]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content bg-[#15151580] py-16 px-44">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
          <p className="text-xl font-semibold">{description}</p>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

Cover.propTypes = {
    coverBg: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Cover;
