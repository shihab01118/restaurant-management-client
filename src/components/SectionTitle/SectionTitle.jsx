import PropTypes from 'prop-types';

const SectionTitle = ({heading, subheading}) => {

    return (
        <div className="text-center mb-12">
        <p className="text-[#D99904] italic text-xl">
          ---{subheading}---
        </p>
        <hr className="border-2 border-[#E8E8E8] max-w-sm mx-auto my-4" />
        <h2 className="text-4xl">{heading}</h2>
        <hr className="border-2 border-[#E8E8E8] max-w-sm mx-auto mt-4" />
      </div>
    )
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
}

export default SectionTitle;