import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ScrollButtons = ({ onScroll }) => {
    return (
        <div
            className="d-flex align-items-center mt-5"
            style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
                icon={faChevronRight}
                fontSize={20}
                onClick={() => onScroll(-50)}
            />
            {/* <ChevronLeftRegular fontSize={20} onClick={() => onScroll(-50)} /> */}
            {/* <ChevronRightRegular fontSize={20} onClick={() => onScroll(50)} /> */}
        </div>
    );
};

export default ScrollButtons;
