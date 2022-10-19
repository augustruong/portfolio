import React, { useEffect, useState } from 'react'

export default function Project06(props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      { props.section === "plan" && 
        <>
          { props.language === "ja" &&
            <>
              <h4>制作の目的</h4>
              <p className='mb70'>
                ・東京で自分の体験と経験を共有する<br/>
                ・東京の観光、場所、イベントを紹介する<br/>
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
                ・東京を発見したい方<br/>
                ・東京で留学生の生活を気にする方<br/>
              </p>
              <h4>制作過程</h4>
              <p className='mb70'>
              「August」は自分の英語の名前です。漢字で「八月」と「東京」の組み合わせでロゴを作りました。使用した写真は自分で撮影して、レタッチしました。各ポスト記述は地名でタイトルをつけて、内容は自分の言葉で自分の体験を英語で載りました。
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
            <img src={process.env.PUBLIC_URL + `/images/projects/augustokyo/design.png`} />
          
            <p>もっと見る：<a href={'https://bit.ly/3SEglJH'} target="_blank" style={{color : 'rgb(196, 41, 41)', fontWeight : '800'}}>Click here</a></p>
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