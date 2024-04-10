import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export const Banner = () => {
  const [banner, setBanner] = useState(true)
  const toggleBanner = () => setBanner(!banner)
  return (
    <div className={`relative z-40 flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 transition-all ${banner ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <p className="text-sm leading-6 text-white">
        <a href="#">
          <strong className="font-semibold">LifeUnity is new</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Register and try our fabulous application, its free  <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px] active:scale-95" onClick={toggleBanner}>
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
