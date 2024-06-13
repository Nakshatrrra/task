import React, { useState } from 'react';
import IconPicker from './components/IconPicker';
import * as Icons from 'feather-icons-react';
import './App.css';

function App() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleIconClick = () => {
    setIsPickerOpen(true);
  };

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
    setIsPickerOpen(false);
  };

  const handleClosePicker = () => {
    setIsPickerOpen(false);
  };

  const SelectedIconComponent = selectedIcon ? Icons[selectedIcon] : null;

  return (
    <div className="App">
      <div className="icon-display" onClick={handleIconClick}>
        {SelectedIconComponent ? <SelectedIconComponent size={100} /> : 'Click to select an icon'}
      </div>
      {isPickerOpen && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={5}
          iconHeight={40}
          iconWidth={40}
          onSelectIcon={handleSelectIcon}
          onClose={handleClosePicker}
        />
      )}
    </div>
  );
}

export default App;
