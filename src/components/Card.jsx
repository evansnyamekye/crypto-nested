import PropTypes from 'prop-types';

function Card({ title, details }) {
  return (
    <div className="odd:bg-brightBlueSupLight even:bg-brightBluedDark even:dark:bg-newDarkRed odd:dark:bg-newRed px-5 py-10 w-full flex flex-row justify-between items-center">
      <p className="text-2xl font-bold">{title}</p>
      <p>{details}</p>
    </div>
  );
}

Card.defaultProps = {
  title: 'card',
  details: '120',
};

Card.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
};

export default Card;
