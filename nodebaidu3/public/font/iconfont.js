;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-search" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M801.852504 466.544739c-0.016373-182.64583-148.606573-331.23603-331.244216-331.23603-88.478124 0-171.654498 34.452673-234.231719 97.027847-62.559824 62.569034-97.012498 145.738245-97.012498 234.208183 0 88.478124 34.452673 171.656545 97.020684 234.223532 62.569034 62.559824 145.745409 97.020684 234.223532 97.020684 82.280981 0 159.744237-30.126134 220.551138-84.620259l24.11728 24.11728-1.411139 1.411139c-6.236028 6.235005-6.236028 16.34527 0 22.580275L834.270844 881.68369c6.235005 6.235005 16.34527 6.235005 22.580275 0l25.394367-25.402553c6.237051-6.227842 6.237051-16.337083 0-22.574135L761.841232 713.301725c-6.235005-6.235005-16.34527-6.235005-22.580275 0l-1.411139 1.411139-23.945365-23.953551C770.509658 629.438713 801.852504 550.486546 801.852504 466.544739zM270.252097 666.900929c-53.526077-53.517891-82.998319-124.669394-82.998319-200.355167 0-75.67861 29.472242-146.828067 82.990133-200.348004 53.519937-53.517891 124.685767-82.998319 200.363354-83.005482 156.229181 0.008186 283.3453 127.124306 283.353486 283.353486 0 75.67861-29.487591 146.845463-83.005482 200.363354-53.519937 53.517891-124.669394 82.990133-200.348004 82.998319C394.921491 749.906411 323.772035 720.41882 270.252097 666.900929z" fill="#ffffff" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M222.559888 537.001417c97.603969-20.961404 84.308151-137.611148 81.377402-163.081239-4.787026-39.311331-51.006697-108.024296-113.781416-102.592586-78.977749 7.071046-90.520643 121.193223-90.520643 121.193223C88.951915 445.23234 125.20663 557.940308 222.559888 537.001417zM326.187037 739.826845c-2.87856 8.222265-9.243525 29.196972-3.737114 47.471175 10.898211 40.953737 46.460148 42.807968 46.460148 42.807968l51.130518 0L420.040588 705.175651l-54.731532 0C340.711845 712.512756 328.827167 731.630163 326.187037 739.826845zM403.661549 341.413833c53.949726 0 97.466845-62.029752 97.466845-138.759297 0-76.603679-43.517119-138.633431-97.466845-138.633431-53.795207 0-97.490382 62.029752-97.490382 138.633431C306.172191 279.384082 349.867366 341.413833 403.661549 341.413833zM635.8354 350.581634c72.030523 9.333576 118.363781-67.561745 127.558188-125.815497 9.382695-58.19133-37.103036-125.805264-88.107687-137.409556C624.192222 75.625398 560.380894 157.468404 554.571584 210.875778 547.615149 276.151457 563.903114 341.312526 635.8354 350.581634zM812.342416 693.102684c0 0-111.458511-86.252433-176.507016-179.411159-88.221274-137.461745-213.508745-81.517595-255.422344-11.643178-41.724287 69.88465-106.733906 114.084315-115.979478 125.778658-9.392928 11.529591-134.654816 79.166037-106.83419 202.685235 27.795043 123.441427 125.473713 121.092939 125.473713 121.092939s71.957869 7.083326 155.482167-11.592013c83.534532-18.551518 155.427932 4.608971 155.427932 4.608971s195.123003 65.326844 248.527306-60.451814C895.841132 758.351758 812.342416 693.102684 812.342416 693.102684zM478.499002 880.329856 351.633592 880.329856c-54.79293-10.921747-76.603679-48.339962-79.367629-54.679343-2.689249-6.465249-18.223037-36.534078-10.003841-87.654362 23.653723-76.577073 91.189885-82.122369 91.189885-82.122369l67.525929 0 0-83.004459 57.522088 0.88209L478.500025 880.329856zM714.761983 879.460046 568.778144 879.460046c-56.587809-14.59951-59.225893-54.782697-59.225893-54.782697L509.552252 663.23647l59.225893-0.933255 0 145.073096c3.586688 15.445784 22.832008 18.275225 22.832008 18.275225l60.111053 0L651.721205 663.23647l63.040778 0L714.761983 879.460046zM921.401274 448.403566c0-27.872814-23.147186-111.825878-109.058858-111.825878-86.050842 0-97.529267 79.231529-97.529267 135.223774 0 53.482075 4.520967 128.116913 111.38074 125.703957C933.120177 595.156932 921.401274 476.461599 921.401274 448.403566z" fill="#ffffff" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M923.31895 476.532207 547.4637 476.532207 547.4637 99.652628c0-19.580964-15.878642-35.462676-35.464723-35.462676s-35.4637 15.880689-35.4637 35.462676l0 376.87958L98.632391 476.532207c-19.587104 0-35.4637 15.878642-35.4637 35.467793 0 19.584034 15.876596 35.462676 35.4637 35.462676l377.902886 0 0 376.87958c0 19.589151 15.876596 35.467793 35.4637 35.467793s35.464723-15.878642 35.464723-35.467793L547.4637 547.461653l375.85525 0c19.587104 0 35.464723-15.878642 35.464723-35.462676C958.784696 492.410849 942.906054 476.532207 923.31895 476.532207z" fill="#ffffff" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangxia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M890.335385 330.911222c-12.576374-12.416396-32.800753-12.352748-45.248112 0.192662L517.248327 661.951458 184.831931 332.512727c-12.576374-12.447359-32.800753-12.352748-45.280796 0.192662-12.447359 12.576374-12.352748 32.831716 0.192662 45.280796l353.311652 350.112082c0.543583 0.543583 1.247144 0.672598 1.792447 1.183497 0.127295 0.127295 0.159978 0.287273 0.287273 0.416288 6.239161 6.175514 14.399785 9.280473 22.527725 9.280473 8.224271 0 16.479505-3.168606 22.720387-9.471415l350.112082-353.311652C902.975407 363.615643 902.880796 343.360301 890.335385 330.911222z" fill="#ffffff" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M513.022795 61.718667c-147.677411 0-267.395026 119.716592-267.395026 267.395026 0 147.678434 119.716592 267.395026 267.395026 267.395026S780.417821 476.792127 780.417821 329.11267C780.417821 181.435259 660.700205 61.718667 513.022795 61.718667zM513.021771 510.98795c-100.446713 0-181.874257-81.427544-181.874257-181.874257 0-100.447736 81.427544-181.874257 181.874257-181.874257 100.446713 0 181.875281 81.426521 181.875281 181.874257C694.897052 429.560406 613.468484 510.98795 513.021771 510.98795zM156.930657 959.469288c-0.032746-2.02103-0.056282-4.043083-0.056282-6.072299 0-197.981097 158.995177-358.477464 355.123067-358.477464 196.130959 0 355.126136 160.496367 355.126136 358.477464 0 2.028193-0.022513 4.051269-0.056282 6.072299l92.433202 0c0.026606-2.02103 0.042979-4.043083 0.042979-6.070252 0-244.530272-200.372563-442.760033-447.543989-442.760033-247.173472 0-447.546036 198.22976-447.546036 442.760033 0 2.026146 0.016373 4.049223 0.042979 6.070252L156.930657 959.469288z" fill="#ffffff" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
