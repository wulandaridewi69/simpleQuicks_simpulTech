import '../style.css';

const Bookmark = (props) => {
    return (
        <>
        <div className='mark' onClick={props.onClick}>
            <p className='a'>Important ASAP</p>
            <p className='b'>Offline Meeting</p>
            <p className='c'>Virtual Meeting</p>
            <p className='d'>ASAP</p>
            <p className='e'>Client Related</p>
            <p className='f'>Self Task</p>
            <p className='g'>Appointments</p>
            <p className='h'>Court Related</p>
        </div>
        </>
    )
}

export default Bookmark;