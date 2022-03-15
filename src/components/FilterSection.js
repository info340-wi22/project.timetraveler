import React from 'react'; //import React Component

export function FilterSection(props) {

  return (
    <section className="filter-section">
      <div className="filter-container">
        {/* <!-- filter bar --> */}
        <div id="myBtnContainer" className="filter-container">
          <button id="ShowAllEvents" className={'btn filter-btn'} onClick={props.handleFilter}>
            Show all Events
          </button>
          <button id="MustDo" className={'btn filter-btn'} onClick={props.handleFilter}>
            Must do
          </button>
          <button id="TrytoDo" className={'btn filter-btn'} onClick={props.handleFilter}>
            Try to do
          </button>
        </div>
      </div>
    </section>
  );
}
