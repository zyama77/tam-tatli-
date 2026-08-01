const products = [
  { name: "Хавуч Делим", price: 1300, profit: 650, count: 0 },
  { name: "Мидия", price: 1600, profit: 650, count: 0 },
  { name: "Бурма", price: 1500, profit: 650, count: 0 },
  { name: "Класик Фисташка", price: 2200, profit: 850, count: 0 },
  { name: "Большой Хавуч", price: 1300, profit: 650, count: 0 },
  { name: "Бабочка", price: 1500, profit: 550, count: 0 },
  { name: "Орех Нутела", price: 2200, profit: 750, count: 0 },
  { name: "Шобиет", price: 1450, profit: 600, count: 0 }
];

const container = document.getElementById("products");

function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <h2>${product.name}</h2>

      <div class="product-info">
        <div>💰 Цена: <b>${product.price.toLocaleString("ru-RU")} ₽</b></div>
        <div>📦 Продано: <b>${product.sold}</b></div>
      </div>

      <div class="buttons">

        <button class="cash-btn"
          onclick="cashSale(${index})">
          💵 Продать за наличные
        </button>

        <button class="debt-btn"
          onclick="debtSale(${index})">
          🤝 Продать в долг
        </button>

        <button class="cancel-btn"
          onclick="cancelSale(${index})">
          ↩ Отменить последнюю продажу
        </button>

      </div>
    `;

    productsContainer.appendChild(card);
  });
}

  document.getElementById("packs").textContent = totalPacks;
  document.getElementById("revenue").textContent =
    totalRevenue.toLocaleString("ru-RU") + " ₽";
  document.getElementById("profit").textContent =
    totalProfit.toLocaleString("ru-RU") + " ₽";

  localStorage.setItem("tamtatli", JSON.stringify(products));
}

function change(index, value) {
  products[index].count += value;

  if (products[index].count < 0) {
    products[index].count = 0;
  }

  render();
}

document.getElementById("reset").onclick = () => {
  products.forEach(p => p.count = 0);
  render();
};

const saved = localStorage.getItem("tamtatli");

if (saved) {
  const data = JSON.parse(saved);

  data.forEach((item, i) => {
    products[i].count = item.count;
  });
}

render();
