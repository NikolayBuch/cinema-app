import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Text.module.scss';

const Text = ({ as: As, className, children, size, isHtml }) => {
  const mods = modsClasses(s, { size });

  if (isHtml) {
    return (
      <As
        className={cx(s.root, className, mods)}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }
  return <As className={cx(s.root, className, mods)}>{children}</As>;
};

Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small', 'big', 'h1', 'h2', 'h3']),
};

Text.defaultProps = {
  size: 'normal',
  as: 'div',
};

export default Text;
