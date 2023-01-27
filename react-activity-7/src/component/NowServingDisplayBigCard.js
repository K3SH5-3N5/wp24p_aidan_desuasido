function NowServingDisplayBigCard(props) {
    return (
        <div className="card text-bg-info p-2 h-50percent">
            <span className="card-title">{props.title}</span>
            <br />
            <br />
            <div className="card-body text-center fs-1 fw-semibold">{props.body}</div>
            <br />
            <span className="fw-light">
                {props.footer1}
            </span>
            <span className="card-subtitle fw-bold">
                {props.footer2}
            </span>
        </div>
    );
}

export default NowServingDisplayBigCard;