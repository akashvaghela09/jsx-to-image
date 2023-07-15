import './App.css';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { WikipediaDarkMode } from "./features/icon-generator/Wiki/WikipediaDarkMode";
import { PromptBuddy } from "./features/icon-generator/PromptBuddy/PromptBuddy";
import { WikiPromo } from './features/promo-poster/Wiki/WikiPromo';
import { PromptBuddyPromo } from './features/promo-poster/PromptBuddy/PromptBuddyPromo';

function App() {

  const handleDownload = (list) => {
    for (let i = 0; i < list.length; i++) {
      const element = document.getElementById(list[i]);

      html2canvas(element, {
        backgroundColor: null, // Set the background color to null for transparency
        useCORS: true // Enable cross-origin resource sharing if required
      }).then(canvas => {
        canvas.toBlob(blob => {
          saveAs(blob, `${list[i]}.png`);
        }, 'image/png');
      });
    }
  };

  const DownloadButton = () => {

    const downloadList = [
      "icon512", // for icons
      // "promo-poster"
    ];

    return (
      <button className='download_btn' onClick={() => handleDownload(downloadList)}>Download</button>
    )
  }

  return (
    <div className="App">
      <DownloadButton />
      <div id="canvas">
        <WikipediaDarkMode />
        {/* <PromptBuddy /> */}
        {/* <WikiPromo /> */}
        {/* <PromptBuddyPromo /> */}
      </div>
    </div>
  );
}

export default App;
