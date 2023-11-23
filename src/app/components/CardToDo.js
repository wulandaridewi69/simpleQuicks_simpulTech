import '../style.css';

const CardToDo = (props) => {
    return (
        <div className='m-7 1'>
            <div className='grid grid-cols-3'>
              <div className='flex gap-2.5 col-span-2 mb-4'>
                <input checked={props.completed} id="link-checkbox" type="checkbox" value="" className="w-4 h-3/5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <p className={props.completed ? 'done' : 'titleTask'}>{props.title}</p>
              </div>
              <div className='flex items-center h-2/5 justify-evenly timeTask mb-4'>
                <p>2 Days left</p>
                <p>12/06/2021</p>
                <svg className='rotate' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.175 13.0875L10 9.27086L13.825 13.0875L15 11.9125L10 6.91253L5 11.9125L6.175 13.0875Z" fill="#4F4F4F" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="4" viewBox="0 0 14 4" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z" fill="#828282" />
                </svg>
              </div>
            </div>
            <div className='ml-5 mr-5'>
              <div className='flex items-center gap-2 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z" fill="#2F80ED" />
                </svg>
                <div className='flex dates'>
                  12/06/2021
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 1.99996H12.6667V0.666626H11.3333V1.99996H4.66668V0.666626H3.33334V1.99996H2.66668C1.93334 1.99996 1.33334 2.59996 1.33334 3.33329V14C1.33334 14.7333 1.93334 15.3333 2.66668 15.3333H13.3333C14.0667 15.3333 14.6667 14.7333 14.6667 14V3.33329C14.6667 2.59996 14.0667 1.99996 13.3333 1.99996ZM13.3333 14H2.66668V6.66663H13.3333V14ZM2.66668 5.33329H13.3333V3.33329H2.66668V5.33329Z" fill="#4F4F4F" />
                  </svg>
                </div>
              </div>
              <div className='flex items-center gap-2 mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z" fill="#2F80ED" />
                </svg>
                <p className='taskDesc'>{props.completed ? 'This task has completed' : 'This task still progress' }</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="2" viewBox="0 0 671 2" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M671 1.5H0V0.5H671V1.5Z" fill="#828282" />
            </svg>
          </div>
    )
}

export default CardToDo;