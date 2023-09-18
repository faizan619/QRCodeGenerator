import {useEffect, useState, useRef} from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

function Reader() {

    const scannerRef = useRef(null);
    const [scanResult, setScanResult ] = useState(null);

    useEffect(()=>{

        if (!scannerRef.current) {
            return ;
        } 
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width:250,
                height:250,
            },
            fps:10,
        });
    
        scanner.render(success, error);
    
        function success(result) {
            scanner.clear();
            setScanResult(result)
        }
    
        function error(err){
            if (!err.includes("NotFoundException")) {
                console.log("Error  : "+err);
            }
        }    

        
    },[]);

    
  return (
    <>
        <div id="app">
            {scanResult ?(
                 <div>
                    Result : <a target='_faizan' className='websiteresult' href={scanResult}>{scanResult}</a>
                    <a target='_aneeza' href={scanResult}><button>Visit Website</button></a>
                 </div>
            ): (
                <div ref={scannerRef} id="reader"></div>
            )}
        </div>
    </>
  )
}

export default Reader