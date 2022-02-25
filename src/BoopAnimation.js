import React from 'react';

const Boop = ({ rotation = 0, timing = 150, children }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    React.useEffect(() => {
        if (!isBooped) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isBooped, timing]);
    const trigger = () => {
        setIsBooped(true);
    };
    const style = {
        display: 'inline-block',
        color: 'cyan',
        backfaceVisibility: 'hidden',
        transform: isBooped
            ? `rotate(${rotation}deg)`
            : `rotate(0deg)`,
        transition: `transform ${timing}ms`
    };
    return (
        <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
    );
};
export default Boop;