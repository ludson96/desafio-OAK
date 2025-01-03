document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("form-container");
  const listContainer = document.getElementById("list-container");
  const productForm = document.getElementById("product-form");
  const productList = document.getElementById("product-list");
  const newProductBtn = document.getElementById("new-product-btn");

  let products = [];

  // Mostrar a listagem de produtos
  const showList = () => {
    formContainer.classList.add("hidden");
    listContainer.classList.remove("hidden");
    renderProducts();
  };

  // Mostrar o formulário de cadastro
  const showForm = () => {
    formContainer.classList.remove("hidden");
    listContainer.classList.add("hidden");
    productForm.reset();
  };

  // Renderizar produtos na tabela
  const renderProducts = () => {
    productList.innerHTML = "";
    const sortedProducts = products.sort((a, b) => a.value - b.value);
    sortedProducts.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.value.toFixed(2)}</td>
      `;
      productList.appendChild(row);
    });
  };

  // Evento de envio do formulário
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const value = parseFloat(document.getElementById("value").value);
    const available = document.querySelector("input[name='available']:checked").value;

    products.push({ name, description, value, available });
    showList();
  });

  // Evento para exibir o formulário ao clicar no botão "Cadastrar Novo Produto"
  newProductBtn.addEventListener("click", showForm);
});
