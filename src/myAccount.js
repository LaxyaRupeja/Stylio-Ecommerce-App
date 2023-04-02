
let baseServerURL = "https://stylio.onrender.com/orders";

let orderSection = document.getElementById("orders_card");
let paginationWrapper = document.getElementById("pagination_wrapper");

window.addEventListener("load", () => {
    fetchAndRenderUsers('?_limit=10&_page=1');
});

function fetchAndRenderUsers(queryParamString = null) {
    fetch(`${baseServerURL}${queryParamString ? queryParamString : ""}`)
        .then((res) => {
            let totalCount = +res.headers.get('X-Total-Count');
            let totalPages = Math.ceil(totalCount / 10)
            // console.log(totalCount, totalPages)
            renderPagination(totalPages);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            renderCardList(data);
        });
}

function renderPagination(numOfPages) {

    function asListOfButtons() {
        let arr = [];
        for (let i = 1; i <= numOfPages; i++) {
            arr.push(getAsButton(i));
        }
        // console.log(arr)
        return arr.join('');
    }

    paginationWrapper.innerHTML = `
      <div>  
        ${asListOfButtons()}  
      </div>
    `


    let paginationButtons = document.querySelectorAll(".pagination-button");
    for (let btn of paginationButtons) {
        btn.addEventListener('click', (e) => {
            let dataId = e.target.dataset.id;
            fetchAndRenderUsers(`?_limit=10&_page=${+dataId}`);
        })
    }
}


function getAsButton(pageNumber) {
    return `<button class="pagination-button" data-id=${pageNumber}>${pageNumber}</button>`
}

function renderCardList(cardData) {
    let cardList = `
      <div class="card-list">
        ${cardData
            .map((item) =>
                getCard(
                    item.id,
                    item.title,
                    `₹${item.price}`,
                    item.img
                )
            )
            .join("")}
      </div>
    `;

    orderSection.innerHTML = cardList;
}

function getCard(id, title, price, img) {
    let card = `
        <div class="card" data-id=${id} >
          <div class="card__img">
          <img src=${img} alt="sorry" />
          </div>
          <div class="card__body">
            <h3 class="card__item card-title">${title}</h3>
            <div class="card__item card-price">
              ${price}
            </div>
          </div>
        </div>
    `;
    return card;
}