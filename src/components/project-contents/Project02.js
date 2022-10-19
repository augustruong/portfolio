import React, { useEffect, useState } from 'react'

export default function Project02(props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      { props.section === "plan" && 
        <>
          { props.language === "ja" &&
            <>
              <h4>制作の目的</h4>
              <p className='mb70'>
                ・the mysc. Boxの紹介、販売<br/>
                ・サービスの内容と印象アピール<br/>
                ・読者を購入に誘導する
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
                ・新しい体験をしたい方<br/>
                ・お菓子やおもちゃ、お土産などが好きな方<br/>
                ・遊び心と好奇心がある方
              </p>
              <h4>制作過程</h4>
              <p className='mb70'>
                授業の課題としてグループで制作。企画書、ブランドロゴ、コンテンツ、画像はグループで制作し、私は User Persona 設計とWebデザインを担当した。<br/>
                「箱を開けると、何が飛び出す？」と考えると、バブルのイメージが浮かび上がった。夢とミステリー感にふさわしいと思い、バブルをメインビジュアルにした。
                デザインコンセプトを決めた後、箱とバブルのイラスト、グラデーション背景を作成した。最終評価は教授から「秀」を受けました。
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
              グラデーションの3Dボックスをデザインしてみた。ボックスのトップはロゴタイプと組み合わせで、サイドはミステリーを表現する「？」マークを配置。
            </p>
            <img src={process.env.PUBLIC_URL + `/images/projects/the-mysc-box/logo.svg`}
                 style={{width : '35%'}}
                 className='mb100'
            /> 
            <h4>ユーザーペルソナ</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/the-mysc-box/user-persona.png`} />

            <h4>サイト構造</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/the-mysc-box/site-structure.png`} />

            <h4>デザインの工夫ポイント</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/the-mysc-box/design.png`} />
          
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