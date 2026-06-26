import React from 'react'
const Title = (props) => {
    const {tindex} = props
    let title, sub_title;

    if(tindex === '1') {
        title = "PICK"
        sub_title = '시선을 잡는 스타링일'
    }else if (tindex === '2'){
        title = "PICK"
        sub_title = '시선을 잡는 스타링일'
    }
  return (

    // Tailwind의 공간 확보 유틸리티(space-y)로 두 태그 사이의 수직 간격을 조절합니다.
    <div className="mt-[70px] text-center space-y-2">
      <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
        MD's Pick
      </h3>
    

      <p className="text-gray-500 text-sm md:text-base">
        시선을 사로잡는 스타일링, 제품들을 만나보세요.
      </p>
    </div>
  )
}

export default Title
