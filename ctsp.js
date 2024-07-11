document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buyButton');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');
    const checkoutButton = document.getElementById('checkoutButton');

    buyButton.addEventListener('click', () => {
        popup.style.bottom = '0';
    });

    closeButton.addEventListener('click', () => {
        popup.style.bottom = '-100%';
    });

    checkoutButton.addEventListener('click', () => {
        const category = document.getElementById('category').value;
        const quantity = document.getElementById('quantity').value;
        alert(`Đặt hàng thành công! Bạn đã chọn ${quantity} sản phẩm của  ${category}. Đơn hàng của bạn đang chờ xử lí`);
        popup.style.bottom = '-100%';
    });
});
