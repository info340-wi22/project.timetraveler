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
        <div className="d-flex justify-content-end searchbar">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Type here.."
              aria-label="Search"
              onChange={props.handleSearch}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

// function handleFilter(input) {
//   let category = input.target.id;
//   let cardsCopy = cardsData;
//   if (category !== 'ShowAll') {
//       cardsCopy = cardsData.filter(
//           (card) => card.cate.toLowerCase() === category.toLowerCase()
//       );
//   }
//   setCards(cardsCopy);
// }

// function handleSearch(input) {
//   let searchWord = input.target.value;
//   let cardsCopy = cardsData.filter((card) =>
//       card.title.toLowerCase().includes(searchWord.toLowerCase())
//   );
//   setCards(cardsCopy);
// }

// handleSearch={handleSearch}
// handleFilter={handleFilter}