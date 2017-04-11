import React, {Component, PropTypes} from "react";
import "./index.less";

class QRCode extends Component{

    render(){
        return (
            <div className="qrcode-wrapper">
                <div className="mask"></div>
                <div className="qrcode">

                </div>
            </div>
        )
    }

}
export default QRCode;
