import { useState, useEffect } from "react";

function App() {
    const [time, setTime] = useState(new Date()); // Initialize with Date object
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        // Cleanup function
        return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes(); // Fixed typo: geMinutes -> getMinutes
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";
        
        // Convert to 12-hour format
        hours = hours % 12 || 12; // Show 12 instead of 0 for midnight
        
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }

    function padZero(number) {
        return number.toString().padStart(2, '0'); // Modern padding method
    }

    return (
        <div className="clock">
            <h2 className="time">
                {formatTime()}
            </h2>
        </div>
    );
}

export default App;
