import { FeedbackMain } from './Main.styled';
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
  return <FeedbackMain>{children}</FeedbackMain>;
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};
