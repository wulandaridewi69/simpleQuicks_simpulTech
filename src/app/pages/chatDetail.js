import Image from 'next/image'
import '../app/style.css'

import Search from '../app/assets/search.png';

export default function Home() {
  return (
    <main className="flex items-center justify-between bg-black">
      <div className='absolute start-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1637" height="58" viewBox="0 0 1637 58" fill="none">
          <path d="M0 0H1637V58H0V0Z" fill="#4F4F4F" />
        </svg>
        <div className='absolute inset-6 left-6'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7124 10.0629H11.4351L16 14.6369L14.6369 16L10.0629 11.4351V10.7124L9.81589 10.4563C8.77301 11.3528 7.4191 11.8925 5.94625 11.8925C2.66209 11.8925 0 9.23042 0 5.94625C0 2.66209 2.66209 0 5.94625 0C9.23042 0 11.8925 2.66209 11.8925 5.94625C11.8925 7.4191 11.3528 8.77301 10.4563 9.81589L10.7124 10.0629ZM1.82959 5.94554C1.82959 8.22342 3.66835 10.0622 5.94623 10.0622C8.2241 10.0622 10.0629 8.22342 10.0629 5.94554C10.0629 3.66767 8.2241 1.82891 5.94623 1.82891C3.66835 1.82891 1.82959 3.66767 1.82959 5.94554Z" fill="#F2F2F2" />
          </svg>
        </div>
      </div>

      <div className='bg-quikc'>
        <div className='inbox'>
          <div className='chatBox'>

            <div className='headerTitle lineDetail flex gap-8'>
              <div className='desc flex items-center'>
                <div className='flex items-center gap-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#333333" />
                  </svg>
                  <div class="grid">
                    <p className='font-bold title'>I-589 - AMARKHIL, Obaidullah [Afirmatif Filling with ZHN]</p>
                    <p className='font-normal text-xs'>3 Participants</p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#333333" />
                </svg>
              </div>
            </div>

            <div className='m-7'>
              <div className='mb-11'>
                <p className='youColor text-sm'>You</p>
                <div className='flex'>
                  <span>...</span>
                  <div className='colorMe text-xs' >
                    <p className='message'>No worries it will be completed ASAP I've asking to him yesterday </p>
                    <p>19:32</p>
                  </div>
                </div>
              </div>

              <h5 className='oldMessage'><span>Today June 09, 2021</span></h5>

              <div className='mb-5'>
                <p className='otherColor text-sm'>Mary Hilda</p>
                <div className='flex'>                  
                  <div className='colorOther text-xs' >
                    <p className='message'>Hello, Obaidullah, I will be your case advisor for case #029290. I have assigned some home work for you to fill. please keep up with the due dates. should you have any question. Thanks</p>
                    <p>19:32</p>
                  </div>
                  <span>...</span>
                </div>
              </div>

              <div className='mb-5'>
                <p className='youColor text-sm'>You</p>
                <div className='flex'>
                  <span>...</span>
                  <div className='colorMe text-xs' >
                    <p className='message'>No worries it will be completed ASAP I've asking to him yesterday.  your case advisor for case #029290.</p>
                    <p>19:32</p>
                  </div>
                </div>
              </div>

              <div className='mb-11'>
                <p className='otherColor text-sm'>Mary Hilda</p>
                <div className='flex'>                  
                  <div className='colorOther text-xs' >
                    <p className='message'>ok thanks Thanks</p>
                    <p>19:32</p>
                  </div>
                  <span>...</span>
                </div>
              </div>

              <h5 className='newMessage'><span>New Message</span></h5>

              <div className='mb-11'>
                <p className='otherColor text-sm'>Mary Hilda</p>
                <div className='flex'>                  
                  <div className='colorOther text-xs' >
                    <p className='message'>ok thanks Thanks</p>
                    <p>19:32</p>
                  </div>
                  <span>...</span>
                </div>
              </div>

            </div>

            <div className='createMessage'>
              <textarea placeholder='Type a new message' className='text-xs'/>
              <button>Send</button>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}
