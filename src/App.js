import './App.css';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { Banner } from './components/Banner/Banner';
// import { WikipediaDarkMode } from './components/Wiki/WikipediaDarkMode';
// import { PromptBuddy } from './components/PromptBuddy/PromptBuddy';

function App() {

  const handleDownload = () => {
    const element = document.getElementById("canvas");

    html2canvas(element).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'image.png');
      });
    });
  };

  const DownloadButton = () => {
    return (
        <button className='download_btn' onClick={handleDownload}>Download</button>
    )
  }

  return (
      <div className="App">
        <DownloadButton />
        <div id="canvas">
          {/* <WikipediaDarkMode /> */}
          {/* <PromptBuddy /> */}
          <Banner />
        </div>
      </div>
  );
}

export default App;
