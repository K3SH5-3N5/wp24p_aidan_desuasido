function NowServingCard(props) {
    return (
        <div className="card text-bg-warning .min-h200px"  >
            <span className="card-title border-0">{props.title}</span>
            <br />
            <div className="card-body fs-1" >{props.body}</div>
            <span className="card-footer border-0  fs-6" >{props.footer}</span>
        </div>
    );
}                

export default NowServingCard;