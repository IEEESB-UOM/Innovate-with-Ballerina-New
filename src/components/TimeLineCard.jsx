import '../stylesheets/timeLineCard1.css'

const TimeLineCard = ({text,month,day,id,className}) => {

    const cardClassName = 'time-line-card';

    return (
        <div className={cardClassName + ' ' + className}>
            <div className="text">{text}</div>
            <div className='inner-card'>
                <div className="month bg-gradient-to-l from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] text-transparent bg-clip-text">{month}</div>
                
                <div className='day bg-gradient-to-l from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] text-transparent bg-clip-text'>{day}</div>
            </div>
        </div>
    );
};

export default TimeLineCard;
