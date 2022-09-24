import React, { useEffect, useState } from 'react'

export default function Project01(props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      { props.section === "plan" && 
        <>
          { props.language === "ja" &&
            <>
              <h4>制作の目的</h4>
              <p className='mb70'>
              ・大和オンライン麺学校のコースを紹介する<br/>
              ・大和のコースにしかない楽しさ・プロフェッショナルの魅力を伝える
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
              ・ラーメンの基本を学びたいラーメン店で働く新人スタッフさん<br/>
              ・商品力アップ・新商品開発に役立てたい既存スタッフさん
              </p>
              <h4>制作過程</h4>
              <p className='mb70'>
              ラーメンがとても好きで、大和オンライン麺学校を知ったことがきっかけです。<br/>日本で唯一のラーメンのE-ランニングサイトですが、ホームページのデザインが硬い表現で、コースの魅力が上手く出ていないようです。その魅力を伝えるために、元のサイトの内容のもとにLanding Pageのリデザインにチャレンジしました。麺の黄色をメインカラーしました。コースの１つの特徴は「楽しく学べる」があるので、カラフルな配色にしてビジュアル的にも印象を与えます。
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
            
            <h4>コンセプト</h4>
            <p className='mb50'>
                全体的に元気さ、美味しさ、楽しさを表現する
                デザインコンセプト。麺の黄色は主な色になる。<br/>
                コースの１つの特徴は「楽しく学べる」があるので、
                カラフル配色を利用してビジュアル的にも印象を与える。
            </p>
            
            <h4>デザインの工夫ポイント</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/ramen-school/design.png`} />
          
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