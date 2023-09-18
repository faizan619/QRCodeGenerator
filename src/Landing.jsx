import {} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import App from './pages/App';
import Reader from './pages/Reader';

function Landing() {
  return (
    <>
        <div className="container">
            <h1>QR Code Scanner and Reader</h1>
            <Tabs defaultIndex={0}>
                <TabList  className="tabmain">
                    <Tab>QR Generator</Tab>
                    <Tab>QR Reader</Tab>
                </TabList>
                <TabPanel>
                    <App/>
                </TabPanel>
                <TabPanel>
                    <Reader/>
                </TabPanel>
            </Tabs>
        </div>
    </>
  )
}

export default Landing