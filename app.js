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

function render() {
  container.innerHTML = "";

  let totalPacks = 0;
  let totalRevenue = 0;
  let totalProfit = 0;

  products.forEach((product, index) => {
    totalPacks += product.count;
    totalRevenue += product.count * product.price;
    totalProfit += product.count * product.profit;

    container.innerHTML += `
      <div class="product">
        <div class="product-name">${product.name}</div>

        <div class="controls">
          <button class="minus" onclick="change(${index},-1)">−</button>

          <div class="count">${product.count}</div>

          <button class="plus" onclick="change(${index},1)">+</button>
        </div>
      </div>
    `;
  });

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
