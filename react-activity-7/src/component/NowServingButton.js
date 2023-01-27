function NowServingButton(props) {
    return (
        <div>
            <span className="btn btn-light p-2 border-1 border-dark h-w-150px-m-r-2px text-center">
               {props.textLabel}
            </span>
        </div>
    );
}

export default NowServingButton;