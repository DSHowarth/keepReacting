
export default function GameTimer ({timeRemaining, points}) {

    return (
        <>
            {/* Time formatting: 
                Converts remaining time into a date object, which is then converted to an ISO string, then sliced away 
                to just reveal minutes:seconds. A very elegant solution, thank you several stackoverflow users. Too many to name. */}
            <h1>Time Remaining: <span className={timeRemaining < 30 ? 'warningTimer' : undefined}> 
                            {new Date(timeRemaining * 1000).toISOString().substring(14, 19)}</span>
            </h1>
            <h2>Points: {points}</h2>
        </>
    )
};