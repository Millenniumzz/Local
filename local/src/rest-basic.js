import React from "react";

export default function RestBasic() {
    let [serverTime, setServerTime] = React.useState({});
    let [footballResult, setFootballResult] = React.useState('');   

    const onClickShowTime = () => {
        fetch('/api/server-time')
        .then(res => res.json())
        .then(result => {
            let r =<>{result.hour}:{result.minute}:{result.second}</>
            setServerTime(r);
        })
        .catch(err=>alert(err.message));
    }
    const onClickFootballResult = () => {
        fetch('/api/football-result')
        .then(res => res.text())
        .then(result => setFootballResult(result))
        .catch(err=>alert(err.message));
    }
    return (
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <button onClick={onClickShowTime}>Get Server Time</button>
            <div>{serverTime}</div>
            <br/>
            <button onClick={onClickFootballResult}>Get Football Result</button>
            <div dangerouslySetInnerHTML={{__html:footballResult}}></div>
        </div>
    )
}