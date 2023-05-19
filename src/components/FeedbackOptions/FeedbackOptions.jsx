import { Btn, FeedbackListWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackListWrapper className="wrapper">
      {options.map(option => {
        return (
          <Btn
            key={option}
            type="button"
            className="btn"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </Btn>
        );
      })}
    </FeedbackListWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
