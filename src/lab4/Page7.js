import React, { useState } from 'react';

function Page7() {
    const [time, setTime] = useState();   
    const [date, setDate] = useState();
    const [alarm, setAlarm] = useState();
    const [started, setAlarmStart] = useState(false);

    const handleTime = (e) => {
        setTime(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleAlarm = () => {
        const alarm = new Date(`${date}T${time}:00`).getTime();
        setAlarmStart(true);
        setAlarm(alarm);
        const timer = setInterval(() => {
            if (Date.now() >= alarm) {
                alert('Будильник!');
                clearInterval(timer);
                setAlarmStart(false);
            }
        }, 1000);
    }

    return (
        <div>
            <h3>Введіть час:</h3>
            <input onChange={handleTime} type='time'/>

            <h3>Введіть дату:</h3>
            <input onChange={handleDate} type='date'/><br />

            <button onClick={handleAlarm} disabled={started}>Поставити будильник</button>
        </div>
    );
}

export default Page7;
