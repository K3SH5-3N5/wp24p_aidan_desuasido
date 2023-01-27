function NowServingDisplay(props) {
    return (
        <div className="card">
            <div className={props.customStyle}>
            <br />
            <br />
            <div className="card-body text-center">{props.textDisplay}</div>
            <br />
            </div>
        </div>
    );
}

export default NowServingDisplay;