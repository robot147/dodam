import Image from 'next/image'

// const imageLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

export default function Newsletter() {
  return (
    <section id="four">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">오시는 길</h3>
                <p className="text-gray-300 text-lg mb-6">만드는 것은 <span className='font-bold'>아무나</span> 따라 할 수 있어도 <span className='font-bold'>“탁월하게”</span> 만드는 것은 <span className='font-bold'>아무나</span> 할 수 없습니다.</p>
                <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
                  <a href="http://map.naver.com/?menu=location&mapMode=0&lat=37.5441846&lng=126.952729&dlevel=12&enc=b64" target="_blank">
                    <Image src={ "/images/map.png" } width="530" height="340" title="지도 크게 보기" style={{ verticalAlign: "top" }} alt=""></Image>
                  </a>
                  <div className="text-gray-600 flex text-font-xsl mt-2 md:mt-6 md:text-sm">
                    <div>
                      <a href="http://map.naver.com/?menu=location&mapMode=0&lat=37.5441846&lng=126.952729&dlevel=12&enc=b64" target="_blank">
                        2023-10-15 <span style={{ color : '#e5e5e5' }}>|</span> 지도 크게 보기
                      </a>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <a href="https://www.navercorp.com/" target="_blank">
                        © <span style={{ color: "#2db400" }}>NAVER Corp.</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 주소 및 기본 정보 */}
                <div className="relative flex flex-col p-6 bg-white rounded shadow-xl mt-12">
                  <div className='flex'>
                    <div style={{ minWidth: '70px', textAlign: 'center'}}>
                      주소
                    </div>
                    <div>
                      서울시 마포구 공덕동 456 한국사회복지회관 르네상스 타워 1607 (우편번호) 121-706
                    </div>
                  </div>
                  <div className='flex'>
                    <div style={{ minWidth: '70px', textAlign: 'center'}}>
                      전화
                    </div>
                    <div>
                      070-7151-1032
                    </div>
                  </div>
                  <div className='flex'>
                    <div style={{ minWidth: '70px', textAlign: 'center'}}>
                      이메일
                    </div>
                    <div>
                      dodaminfo@gmail.com
                    </div>
                  </div>
                </div>
                
                {/* 교통정보 */}
                <div className="relative flex flex-col p-6 bg-white rounded shadow-xl mt-12">
                  <div className='flex'>
                    <div style={{ minWidth: '70px', textAlign: 'center'}}>
                      지하철
                    </div>
                    <div>
                      6호선 공덕역 도보 1분, 5호선 공덕역 도보 2분, 공항철도 공덕역 도보 3분
                    </div>
                  </div>
                  <div className='flex'>
                    <div style={{ minWidth: '70px', textAlign: 'center'}}>
                      버스
                    </div>
                    <div>
                      ① 마을버스 마포17, 마포02, 마포01, 마포10, 용산04, 마포11, 마포12, 마포03 <br/>
                      ② 일반 1002 <br/>
                      ③ 간선급행 8601 <br/>
                      ④ 공항버스 6702, 6015, 6701 <br/>
                      ⑤ 광역 2500 <br/>
                      ⑥ 간선 N16, 163, 263, 604, 261, 110A, 740, 110B, 260, 160, 600, 405 <br/>
                      ⑦ 지선 1711, 7013A, 7611, 7013B, 7016, 7613, 2016
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}