import { registerLicense } from '@syncfusion/ej2-base';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfVZdX3xLflFyVWFTfFh6cFxWESFaRnZdRl1rSX1TdEFhXXxceHZV');

function App() {

  const activeMenu=true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ backgroundColor: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu?(
            <div>
              Sidebars
            </div>
          ):(
            <div>
              Sidebar w-0
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
