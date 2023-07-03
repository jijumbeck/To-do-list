import './LineCard.css';

const LineCard = (props) => {
    const { children } = props;

    return(
        <div className="lineCard">
            {children}
        </div>
    )
}

export default LineCard;