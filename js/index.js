document.querySelector('button.btn btn-info').addEventListener('click', getProduct);

async function getProduct () {
    const response = await fetch('product.html');
    const html = await response.text();
    document.querySelector('.modal-body').innerHTML = html;
}