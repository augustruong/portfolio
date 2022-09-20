import React, { useEffect, useState } from 'react'

export default function Project05(props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      { props.section === "plan" && 
        <>
          { props.language === "ja" &&
            <>
              <h4>制作過程</h4>
              <p className='mb70'>
                「家でも夏を楽しむことができるデザイン」の授業課題で、夏の雰囲気を感じさせる子供向けボードゲーム「レモンポリー」を作った。
                世界中で愛されているボードゲーム「モノポリー」と同じコンセプトだが、ルールをできるだけ簡単化することで、子供にもわかりやすいゲームを目指した。
                ゲームプランの後、イラストを自分で作って、モックアップを作成した。
              </p>
              <h4>制作のテーマ</h4>
              <p className='mb70'>
                暑い夏にぴったりな「レモネード」をテーマにしました。レモネードと共に、背景はプールにし、夏っぽさと新鮮さを伝える配色を意識した。
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
                ・4才以上の子供<br/>
                ・ボードゲームが好きな方<br/>
                ・子供と一緒に遊びたい家族<br/>
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
            <h4>ロゴ制作</h4>
            <p className='mb50'>
              角丸の文字で甘くて柔らかい感じを出した。
              「ポ」の丸を濃い黄色でつけて、レモンのイメージに。ストロークをつくてどんな背景でも見やすくした。
            </p>
            <img src={process.env.PUBLIC_URL + `/images/projects/lemonpoly/logo.png`}
                 style={{width : '60%'}}
                 className='mb100'
            /> 
            
            <h4>デザインの工夫ポイント</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/lemonpoly/design.png`} />
          
            <p>もっと見る：<a href={'https://bit.ly/3RhaolG'} style={{color : 'rgb(196, 41, 41)', fontWeight : '800'}}>https://bit.ly/3RhaolG</a></p>
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