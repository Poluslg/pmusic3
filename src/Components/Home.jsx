import {HandRaisedIcon} from "@heroicons/react/24/outline";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";
import Navbar from './Navbar';
import { useRef, useState } from 'react';

export default function Home() {
  const[error,seterror]=useState("")
  const [user, setUser] = useState({
    email: '',
  });

  const inputElement = useRef(null);

  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    const { email } = user;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (emailPattern.test(email)) {
      try {
        const res = await fetch('https://pmusicbeta-default-rtdb.firebaseio.com/BetaEmail.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        });
        if (res.ok) {
          alert('Thank you for subscribing!');
          setUser({ email: '' });
        } else {
          throw new Error('Network response was not ok');
        }
      }
       catch (error) {
        console.error('Error:', error);
        alert('An error occurred while trying to subscribe. Please try again later.');
      }
    } else {
      seterror("Please enter a valid email address")
      setUser({ email: '' });
    }
  };
  
    return (
      <>
      <Navbar/>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Beta Testers Program for PMusic</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                If you're interested in becoming a beta tester for PMusic, please enter your email in the input box below. We'll keep you informed about the latest updates and when the beta program is available. As a beta tester, you'll get early access to new features and be able to provide feedback to help shape the future of PMusic. Thank you for your interest!
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={inputElement}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="hemail"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={getUserData}
                />
                
                <button
                  type="submit"
                  onClick={postData}
                  className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
              <div className='herror'>
                    <h1>{(error)}</h1>
                 </div>
                 
            </div>  
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                Stay updated with our latest content! Subscribe to our newsletter and receive weekly articles on your favorite topics.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                We at PMusic want to assure you that we respect your privacy and understand the importance of keeping your inbox free of unwanted spam messages.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <svg
          className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
          viewBox="0 0 1155 678"
          fill="none"
        >
          <path
            fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="./favicon.ico" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “PMusic is a free music platform that allows users to listen to their favorite songs anytime, anywhere.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="./favicon.ico"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">PRAHLAD BISWAS</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of PMusic</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    
      <div className="bg-white py-20 " >
      <hr />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
              />
          </div>
        </div>
      </div>
    

      </>
    );
  }