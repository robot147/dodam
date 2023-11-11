import Image from 'next/image'

export default function FeaturesBlocks() {
  return (
    <section id='two' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true" style={{ top: '8%' }}></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">프로젝트 실적</h2>
            <p className="text-xl text-gray-600"><span className="font-bold">스마트폰 Application 구축 경험</span> <br/> 국내 스마트폰 Application 기획 및 디자인 경험</p> <br/><br/>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-20">
            <p className="text-xl text-white"><span className="font-bold">'다양한 기획 및 디자인 경험'</span> <br/> 금융/증강현실(AR)/위치기반(GPS/LBS)등 최신 기술이 적용된 Application 기획, 디자인 참여</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section1_1.png" } width={450} height="270" alt=''></Image>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section1_2.png" } width={450} height="270" alt=''></Image>
            </div>

          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-12 md:pb-12 md:pt-20">
            <p className="text-xl text-white font-bold">'기획에서 서버 및 클라이언트 개발 경험'</p>
            <p className="text-xl text-white">서비스 기획에서 서버 및 클라이언트 개발 참여</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section2_1.png" } width={450} height="270" alt=''></Image>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section2_2.png" } width={450} height="270" alt=''></Image>
            </div>
            
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-12 md:pb-12 md:pt-20">
            <p className="text-xl text-white font-bold">'외환은행 캐나다 1Q Bank 시스템 개발'</p>
            <p className="text-xl text-white">외환은행 캐나다 1Q Bank App 기획, 디자인, 개발 전과정과 운영을 수행</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section3_1.png" } width={450} height="270" alt=''></Image>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section3_2.png" } width={450} height="270" alt=''></Image>
            </div>
            
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-12 md:pb-12 md:pt-20">
            <p className="text-xl text-white font-bold">'신한은행 써니뱅크 앱 개발'</p>
            <p className="text-xl text-white">신한은행 써니뱅크 앱 서버 개발 참여</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section4_1.png" } width={450} height="270" alt=''></Image>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section4_2.png" } width={450} height="270" alt=''></Image>
            </div>
            
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-12 md:pb-12 md:pt-20">
            <p className="text-xl text-white font-bold">'고객 친화적인 서비스 기획, 고객 편의성 고려'</p>
            <p className="text-xl text-white">서비스 기획에서 서버 및 클라이언트 개발</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src={ "/images/section5_1.png" } width={450} height="270" alt=''></Image>
            </div>
            
          </div>

        </div>

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pt-12 md:pb-12 md:pt-20">
          <p className="text-xl text-white font-bold">(주)도담정보의 연도별 프로젝트 실적</p>
        </div>

        <iframe
            src={`http://www.dodaminfo.com:8081/result2.do`}
            allowFullScreen
            style={{ width: '72rem', height: '762px', paddingBottom: '50px' }}
        />
        {/* <iframe name="main" sandbox="allow-same-origin allow-scripts" src="./(주)도담정보_files/result2.html" width="100%" height="600px">지원하지 않습니다.</iframe> */}
      </div>
    </section>
  )
}