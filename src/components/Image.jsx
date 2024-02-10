import React, { useEffect } from "react";
import "../App.css";
import Panth from "../assets/panth.jpeg";
function App() {
  const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
  const bd = document.body;

  useEffect(() => {
    const imgs = document.querySelectorAll(".atvImg");

    for (let l = 0; l < imgs.length; l++) {
      const thisImg = imgs[l];
      const layerElems = thisImg.querySelectorAll(".atvImg-layer");

      if (layerElems.length <= 0) continue;

      while (thisImg.firstChild) {
        thisImg.removeChild(thisImg.firstChild);
      }

      const containerHTML = document.createElement("div");
      const shineHTML = document.createElement("div");
      const shadowHTML = document.createElement("div");
      const layersHTML = document.createElement("div");
      const layers = [];

      thisImg.id = `atvImg__${l}`;
      containerHTML.className = "atvImg-container";
      shineHTML.className = "atvImg-shine";
      shadowHTML.className = "atvImg-shadow";
      layersHTML.className = "atvImg-layers";

      for (let i = 0; i < layerElems.length; i++) {
        const layer = document.createElement("div");
        const imgSrc = layerElems[i].getAttribute("data-img");

        layer.className = "atvImg-rendered-layer";
        layer.setAttribute("data-layer", i);
        layer.style.backgroundImage = `url(${imgSrc})`;
        layersHTML.appendChild(layer);

        layers.push(layer);
      }

      containerHTML.appendChild(shadowHTML);
      containerHTML.appendChild(layersHTML);
      containerHTML.appendChild(shineHTML);
      thisImg.appendChild(containerHTML);

      const w =
        thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
      thisImg.style.transform = `perspective(${w * 3}px)`;

      const moveEvent = supportsTouch ? "touchmove" : "mousemove";
      const enterEvent = supportsTouch ? "touchstart" : "mouseenter";
      const exitEvent = supportsTouch ? "touchend" : "mouseleave";

      (function (_thisImg, _layers, _shine, _totalLayers) {
        _thisImg.addEventListener(moveEvent, function (e) {
          processMovement(
            e,
            supportsTouch,
            _thisImg,
            _layers,
            _shine,
            _totalLayers
          );
        });
        _thisImg.addEventListener(enterEvent, function (e) {
          processEnter(e, _thisImg);
        });
        _thisImg.addEventListener(exitEvent, function (e) {
          processExit(e, _thisImg, _layers, _shine, _totalLayers);
        });
      })(thisImg, layers, shineHTML, layerElems.length);
    }
    // eslint-disable-next-line
  }, [supportsTouch]);

  function processMovement(e, touchEnabled, elem, layers, shine, totalLayers) {
    const { scrollTop: bdst } = bd;
    const { scrollLeft: bdsl } = bd;
    const { pageX, pageY } = touchEnabled ? e.touches[0] : e;
    const { left, top } = elem.getBoundingClientRect();
    const w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
    const h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight;
    const wMultiple = 320 / w;
    const offsetX = 0.52 - (pageX - left - bdsl) / w;
    const offsetY = 0.52 - (pageY - top - bdst) / h;
    const dy = pageY - top - bdst - h / 2;
    const dx = pageX - left - bdsl - w / 2;
    const yRotate = (offsetX - dx) * (0.07 * wMultiple);
    const xRotate = (dy - offsetY) * (0.1 * wMultiple);
    let imgCSS = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    const arad = Math.atan2(dy, dx);
    let angle = (arad * 180) / Math.PI - 90;

    if (angle < 0) angle += 360;

    if (elem.firstChild.classList.contains("over")) {
      imgCSS += " scale3d(1.07,1.07,1.07)";
    }
    elem.firstChild.style.transform = imgCSS;

    shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${
      ((pageY - top - bdst) / h) * 0.4
    }) 0%,rgba(255,255,255,0) 80%)`;
    shine.style.transform = `translateX(${
      offsetX * totalLayers - 0.1
    }px) translateY(${offsetY * totalLayers - 0.1}px)`;

    let revNum = totalLayers;
    for (let ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform = `translateX(${
        offsetX * revNum * ((ly * 2.5) / wMultiple)
      }px) translateY(${offsetY * totalLayers * ((ly * 2.5) / wMultiple)}px)`;
      revNum--;
    }
  }

  function processEnter(e, elem) {
    elem.firstChild.classList.add("over");
  }

  function processExit(e, elem, layers, shine) {
    const container = elem.firstChild;
    container.classList.remove("over");
    container.style.transform = "";
    shine.style.cssText = "";
    for (let ly = 0; ly < layers.length; ly++) {
      layers[ly].style.transform = "";
    }
  }

  return (
    <div className="container">
      <div className="cover atvImg">
        <div className="atvImg-layer" data-img={Panth}></div>
        <div className="atvImg-layer" data-img={Panth}></div>
      </div>
    </div>
  );
}

export default App;
