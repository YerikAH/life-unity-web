
const faqs = [
  {
    id: 1,
    question: "Is LifeUnity really free?",
    answer:
      "Yes, LifeUnity is completely free for all users.",
  },
  {
    id: 2,
    question: "What makes LifeUnity different from other productivity apps?",
    answer:
      "LifeUnity offers a comprehensive solution to improve productivity, manage habits, and achieve balance in daily life.",
  },
  {
    id: 3,
    question: "Does LifeUnity show ads?",
    answer:
      "No, LifeUnity does not display ads on its platform.",
  },
  {
    id: 4,
    question: "How can LifeUnity help me develop good habits?",
    answer:
      "LifeUnity provides tools and tracking to help you establish and maintain healthy habits.",
  },
  {
    id: 5,
    question: "Is LifeUnity an open source application?",
    answer:
      "Yes, LifeUnity is an open source application, which means its source code is available for the community to contribute and improve.",
  },
  {
    id: 6,
    question: "What was the goal when creating LifeUnity?",
    answer:
      "LifeUnity was created with the goal of providing a unique and free tool to improve productivity and well-being in daily life.",
  },
]

export const Faq = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="portfolio-harvey.netlify.com" className="font-semibold text-yellow-600 hover:text-yellow-500">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
