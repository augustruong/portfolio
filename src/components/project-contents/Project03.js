import React, { useEffect, useState } from 'react'

export default function Project03(props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      { props.section === "plan" && 
        <>
          { props.language === "ja" &&
            <>
              <h4>制作の目的</h4>
              <p className='mb70'>
                ・店舗の特徴を魅力的に紹介する<br/>
                ・読者に来店したいと感じてもらう
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
                ・特徴のあるバーに行きたい方
              </p>
              <h4>制作過程</h4>
              <p className='mb70'>
                大学の授業の課題で制作。私はホームページ、メニューページのデザインとモションのコーディングを担当。
                メンバーからアイデアももらい、文字の組みとビジュアル要素のデザインを仕上げた。バーの雰囲気が出るように、
                色の調整した写真を背景に置いた。完成度を高めるため、全ページの上に紙のテクスチャ画像を敷いた。
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
            <img src={process.env.PUBLIC_URL + `/images/projects/kedamono/design.png`} />
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