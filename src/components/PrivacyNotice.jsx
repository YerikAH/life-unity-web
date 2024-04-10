import { useState } from 'react'
export const PrivacyNotice = () => {
  const [modal, setModal] = useState(true)
  const acceptCookies = () => {
    setModal(false)
  }
  const rejectCookies = () => {
    setModal(false)
  }
  return (
    <div className={`pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 transition-all ${modal ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm leading-6 text-gray-900">
          This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
          consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are
          delicious. See our{' '}
          <a href="#" className="font-semibold text-yellow-600">
            cookie policy
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            onClick={acceptCookies}
            type="button"
            className="active:scale-95 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept all
          </button>
          <button onClick={rejectCookies} type="button" className="active:scale-95 text-sm font-semibold leading-6 text-gray-900">
            Reject all
          </button>
        </div>
      </div>
    </div>
  )
}
