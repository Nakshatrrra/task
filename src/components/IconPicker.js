import React, { useState } from 'react';
import * as Icons from 'feather-icons-react';
import './IconPicker.css';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '500px',
  onSelectIcon,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const iconList = Object.keys(Icons);

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(iconList.length / iconsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleIconClick = (icon) => {
    onSelectIcon(icon);
  };

  const currentIcons = iconList.slice(
    currentPage * iconsPerPage,
    (currentPage + 1) * iconsPerPage
  );

  return (
    <div className="icon-picker" style={{ height: pickerHeight, width: pickerWidth }}>
      <button className="close-button" onClick={onClose}>×</button>
      <div className="icon-grid" style={{ gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`, gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)` }}>
        {currentIcons.map((icon, index) => {
          const IconComponent = Icons[icon];
          return (
            <div key={index} className="icon-cell" onClick={() => handleIconClick(icon)}>
              <IconComponent size={iconHeight} />
            </div>
          );
        })}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Next</button>
      </div>
    </div>
  );
};

export default IconPicker;
