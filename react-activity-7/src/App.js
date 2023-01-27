//import logo from './logo.svg';
import "./App.css";
import "./bootstrap-breakpoint.css";
import NowServingCard from "../src/component/NowServingCard";
import NowServingButton from "../src/component/NowServingButton";
import NowServingTotalServed from "../src/component/NowServingTotalServed";
import NowServingCounter from "../src/component/NowServingCounter";
import NowServingDisplay from "../src/component/NowServingDisplay";
import NowServingDisplayBigCard from "../src/component/NowServingDisplayBigCard";

function App() {
    return (
        <div className="container my-container">
            <br />
            <br />
            <div className="container">
                <div className="row row-cols-2  gx-1 gy-0">
                    <div className="col col-4 text-center h-600px">
                        <NowServingDisplay customStyle="text-bg-primary p-2 h-25percent" textDisplay="Senior / PWD" />
                        <br />
                        <NowServingDisplay customStyle="text-bg-success p-2 h-25percent" textDisplay="Regular" />
                        <br />
                        <NowServingDisplayBigCard
                            title="This is your Queue"
                            body="003"
                            footer1="Please wait on your queue to be called and proceed to your
                designated counter"
                            footer2="Thanks for using My Queueing System" />
                    </div>

                    <div className="col col-8 h-600px">
                        <div className="container text-center">
                            <div className="row row-cols-8 gx-1 gy-1">
                                <div className="col">
                                    <NowServingCounter counterLabel="COUNTER" counterNumber="1" />
                                </div>
                                <div className="col">
                                    <NowServingCounter counterLabel="COUNTER" counterNumber="4" />
                                </div>
                                <div className="col">
                                    <NowServingCounter counterLabel="SENIOR / PWD" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="container text-center">
                            <div className="row row-cols-8 gx-1 gy-1">
                                <div className="col">
                                    <NowServingCard title="Now Serving" body="001" footer="Please proceed to the counter" />
                                </div>
                                <div className="col">
                                    <NowServingCard title="Now Serving" body="002" footer="Please proceed to the counter" />
                                </div>
                                <div className="col">
                                    <NowServingCard title="Now Serving" body="009" footer="Please proceed to the counter" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="container text-center ">
                            <div className="row row-cols-3 gy-1 p-2">
                                <div className="col">
                                    <NowServingButton textLabel="NEXT" />
                                </div>
                                <div className="col">
                                    <NowServingButton textLabel="TRANSFER" />
                                </div>
                                <div className="col">
                                    <NowServingButton textLabel="SERVE" />
                                </div>
                            </div>
                        </div>
                        <div className="container p-2 text-center">
                            <div className="row row-cols-3 gx-1 gy-1">
                                <div className="col">
                                    <NowServingTotalServed textLabel="Total Served:" servedCount="10" />
                                </div>
                                <div className="col">
                                    <NowServingTotalServed textLabel="Total Pending:" servedCount="5" />
                                </div>
                                <div className="col">
                                    <NowServingTotalServed textLabel="Over All Total:" servedCount="15" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
