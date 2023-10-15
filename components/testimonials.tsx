import Image from 'next/image'
// import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section id='three' className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">고객사</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <span className="font-bold">일본 기업 및 사회기반 시설의 개발 know-how</span> <br/>
              구성원 다수가 일본 현지 프로젝트 설계 및 개발 경험 <br/>
              <span className="font-bold">해외 프로젝트 경험을 바탕으로 한 다양한 프로젝트 수행 노하우</span>
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-6">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/toshiba.png" } width="180" height="50" alt='toshiba'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/docomo.png" } width="180" height="50" alt='docomo'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/au.png" } width="180" height="50" alt='au'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/fujitsu.png" } width="180" height="50" alt='fujitsu'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/jal.png" } width="180" height="50" alt='jal'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/tepco.png" } width="180" height="50" alt='tepco'></Image>
            </div>

          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-12 pb-12 md:pb-16">
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <span className="font-bold">국내 기업 및 각종 앱 어플리케이션의 개발 know-how</span> <br/>
              <span className="font-bold">서비스 기회에서 부터 개발/유지보수까지의 다양한 프로젝트 수행 노하우</span>
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-6">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/hana.png" } width="180" height="50" alt='hana'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/shinhan.png" } width="180" height="50" alt='shinhan'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/kb.png" } width="180" height="50" alt='kb'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/ibk.png" } width="180" height="50" alt='ibk'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/mol.png" } width="180" height="50" alt='mol'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/dtaq.png" } width="180" height="50" alt='dtaq'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/kra.png" } width="180" height="50" alt='kra'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/amore.png" } width="180" height="50" alt='amore'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/missha.png" } width="180" height="50" alt='missha'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/dasan.png" } width="180" height="50" alt='dasan'></Image>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ "/images/energy.png" } width="180" height="50" alt='energy'></Image>
            </div>

          </div>

          {/* Testimonials */}
          {/* <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white"> */}

              {/* Testimonial */}
              {/* <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div>

            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}