import React, { useEffect, useState } from 'react'

export default function Project00(props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [showBox, setShowBox] = useState(false);

  return (
    <div className='project-content-wrapper'>
      { props.section === "plan" && 
        <div>

          { props.language === "ja" &&
            <>
              <h4>制作過程</h4>
              <p className='mb70'>
                大学のWebデザイン授業の課題として制作。「お茶の水さんぽ～編」という課題で、
                テーマは自由だったため、ダンプリングを紹介するWebサイトを選択。
                評価がよい店舗の情報は Google Map で調べた。
                スマホを使う方も多いと思い、スマホファストでデザインを制作した。
              </p>
              <h4>制作の目的</h4>
              <p className='mb70'>
                ・ダンプリングを簡潔に紹介する。<br/>
                ・お茶の水でおすすめの店舗を素早く検索できる。
              </p>
              <h4>ターゲット</h4>
              <p className='mb70'>
                ・ダンプリングと中華料理が好きな方<br/>
                ・お茶の水で飲食店を探している人
              </p>
              
            </>
          }
          { props.language === "en" &&
            <>
              
            </>
          }
        </div>
      }
      { props.section === "design" && 
        <div>
        { props.language === "ja" &&
          <>
            <h4>ロゴ制作</h4>
            <p className='mb50'>
              課題では、「お茶の水さんぽ～編」タイトル全体のロゴタイプが求められた。餃子に似た形と、「ダ」と「編」のパスを組み合わせてみた。
            </p>
            <img src={process.env.PUBLIC_URL + `/images/projects/ochanomizu-dumplings/logo.svg`}
                 style={{width : '40%'}}
                 className='mb100'
            /> 
            
            <h4>デザインの工夫ポイント</h4>
            <img src={process.env.PUBLIC_URL + `/images/projects/ochanomizu-dumplings/design.png`} 
                 onClick={() => setShowBox(!showBox)}
            />

          </>
        }
        { props.language === "en" &&
          <>
            
            
          </>
        }
        </div>
      }
    </div>
  )
}