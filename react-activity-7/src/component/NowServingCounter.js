function NowServingCounter(props) {
    return (
        <div className="text-bg-info h-100px">
            <h4>{props.counterLabel} {props.counterNumber}</h4>
        </div>
    );
}

export default NowServingCounter;
