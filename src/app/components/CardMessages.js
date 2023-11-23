import '../style.css';

const Card = (props) => {

    return (
        <>
        <div className='lineBottom flex gap-8' onClick={() => props.onClick(props)}>
            <div className='user flex'>
                <div className='profile'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z" fill="#E0E0E0" />
                    </svg>
                    <div className='iconUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z" fill="black" fill-opacity="0.54" />
                        </svg>
                    </div>
                </div>
                <div className='profile blue'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z" fill="#2F80ED" />
                    </svg>
                    <div className='iconUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='desc'>
                <div class="h-[34.24px] justify-start items-baseline gap-4 inline-flex">
                    <p className='font-bold title'>{props.title}</p>
                    <p className='font-normal time flex text-xs'>01/01/2021 <span> 19:10</span></p>
                </div>
                <div className='text-sm fillText'>
                    <p className='font-bold'>{props.name} :</p>
                    <div className=' flex items-baseline justify-between'>
                        <p className='font-normal'>{props.body}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="#EB5757" />
                        </svg>
                    </div>
                </div>

            </div>
        </div >
        </>
    )
}

export default Card;