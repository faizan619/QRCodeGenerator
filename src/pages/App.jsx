import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {

  const [url,seturl] = useState("");
  const [renderTask, setRenderTask] = useState(null);
  const size = 300

  const generatebar = ()=>{
    if(url.length>0){
      document.querySelector(".downbtn").style.display = "inline-block"
      setRenderTask(<div className="barcodeContainer"><QRCode className='barcodeimage' value={url} size={size} /></div>)
    }
    else{
      setRenderTask(<h3>Enter Some text for the Barcode...</h3>)
      document.querySelector(".downbtn").style.display = "none"
    }
  }

  const downloadQRCode = () => {
    window.print();
  };

  
  return (
    <>
      <div className="GeneratorContainer">
        <div className="qrcodeContainer">
        <div className="inputContainer">
          <input 
            type="text" 
            name="barcode"  
            placeholder='https://www.google.com'
            value={url}
            onChange={(e)=>seturl(e.target.value)}
            autoFocus
          />
          <button onClick={generatebar}>Generate</button>
        </div>
        
        {
          renderTask
        }
        
        <center><button className='downbtn' onClick={downloadQRCode}>Print QR Code</button></center>
        </div>
      </div>
    </>
  )
}

export default App
// react pdf renderer
// react confetti
// swiper.js
// web.dev/measure 