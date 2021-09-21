import { ReactComponent as Bigfoot } from '../../../assets/bear.svg'
import gsap from 'gsap'
import './styles.scss'
import { useEffect, useRef} from 'react'


function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function SvgContainer() {
  const svgRef = useRef<SVGSVGElement>(null)
  const selector = gsap.utils.selector(svgRef)

  const eyeLeft = selector('.eyeL')
  const eyeRight = selector('.eyeR')

  function startBlinkingEyes(delay: number){
    if (delay) {
      delay = getRandomInt(delay);
    } else {
      delay = 1;
    }
    gsap.to([eyeLeft, eyeRight], .1, {
      delay: delay, scaleY: 0, yoyo: true, repeat: 1, transformOrigin: "center center", onComplete: function () {
        startBlinkingEyes(8);
      }
    });
  }

  useEffect(() => {
    startBlinkingEyes(5)
  })


  return (
    <div className="svgContainer">
      <div>
        <Bigfoot ref={svgRef} />
      </div>
    </div>
  )

}