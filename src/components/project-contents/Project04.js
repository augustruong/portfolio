import React from 'react'

export default function Project04(props) {
  return (
    <>
      { props.section === "plan" && 
        <>
          { props.language === "ja" &&
            <>
              <h4>制作過程</h4>
              <p className='mb70'>
                1日につき、1枚のCDがあり、１曲を紹介する仕様。1か月のパッケージごとにデザインを変更。
                365枚あるCDはイラストレーターでテンプレートを制作し、各々のCDに適応。
                すべてのデザインが出来上がった後、パッケージを印刷して制作。
                ※サンプル品はすべて、手作りで行った。
              </p>
              <h4>制作の概要・目的</h4>
              <p className='mb70'>
                ・1日1枚のCDに日付と1曲の紹介を入れた日めくりカレンダー。1か月30（または31）枚のCDが1セットとなり、12カ月分のパッケージとなる。
                付属品としてCDプレイヤーの形をした、CD掲示用スタンドもセットとしている。<br/>
                ※CDは日めくりカレンダーの1枚として機能し、CDとして聞くことはできない。曲を聞く時は表紙のQRコードを読み込む<br/>
                ・ 季節ごとに春夏秋冬に歌曲を分類して紹介<br/>
                ・ 主にアメリカ、イギリスの曲を紹介する<br/>
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
                ・主にアメリカ、イギリスの音楽が気に入ってる方<br/>
                ・歌を発見したい方<br/>
              </p>
              
            </>
          }
          { props.language === "en" &&
            <>
              
            </>
          }
        </>
      }
      { props.section === "design" && 
        <>
        { props.language === "ja" &&
          <>       
            <h4>デザインの工夫ポイント</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/calendar/design.png`} className='mb100'/>

            <h4 className='mb30'>イラスト</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/calendar/illust-1.png`} className='mb50'/>
            <img src={process.env.PUBLIC_URL + `/images/projects/calendar/illust-2.png`} className='mb100'/>

            <h4>商品の写真</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/calendar/product-pics.png`} />

            <p>もっと見る：<a href={'https://bit.ly/3uyeaxj'} style={{color : 'rgb(196, 41, 41)', fontWeight : '800'}}>https://bit.ly/3uyeaxj</a></p>
          </>
        }
        { props.language === "en" &&
          <>
            
            
          </>
        }
        </>
      }
    </>
  )
}