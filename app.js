// Set this to the store's international WhatsApp number without "+" or spaces.
const WHATSAPP_NUMBER = '218917880158';

const products = [
  { id: 'rose-blouse', category: 'clothing', name: 'بلوزة روزا', detail: 'قصة انسيابية · لون وردي هادئ', price: 180, badge: 'اختيارنا', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85', alt: 'إطلالة نسائية أنيقة' },
  { id: 'linen-dress', category: 'clothing', name: 'فستان لينن', detail: 'قماش طبيعي · تصميم يومي', price: 265, badge: 'وصل حديثًا', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85', alt: 'فستان نسائي بتصميم أنيق' },
  { id: 'classic-set', category: 'clothing', name: 'طقم كلاسيك', detail: 'قطعتان · قصة مريحة', price: 320, badge: '', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=85', alt: 'ملابس نسائية كلاسيكية' },
  { id: 'gold-earrings', category: 'accessories', name: 'أقراط هالة', detail: 'لمعة ذهبية · خفيفة وأنيقة', price: 95, badge: 'الأكثر طلبًا', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=85', alt: 'أقراط ذهبية أنيقة' },
  { id: 'mini-bag', category: 'accessories', name: 'حقيبة ميني لونا', detail: 'لون رملي · تفاصيل معدنية', price: 245, badge: 'وصل حديثًا', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85', alt: 'حقيبة يد بلون أنيق' },
  { id: 'pearl-necklace', category: 'accessories', name: 'عقد لؤلؤ ناعم', detail: 'تفاصيل رقيقة · لمسة يومية', price: 125, badge: '', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85', alt: 'عقد إكسسوارات ناعم' },
  { id: 'celine-sunglasses', category: 'glasses', name: 'نظارة سيلين', detail: 'حماية UV · إطار بلون العسل', price: 135, badge: 'اختيارنا', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85', alt: 'نظارة شمسية أنيقة' },
  { id: 'noor-sunglasses', category: 'glasses', name: 'نظارة نور', detail: 'إطار كلاسيكي · عدسات داكنة', price: 160, badge: 'وصل حديثًا', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=85', alt: 'نظارات بإطار كلاسيكي' },
  { id: 'soft-frame', category: 'glasses', name: 'إطار سوفت', detail: 'تصميم خفيف · يناسب كل إطلالة', price: 145, badge: '', image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=85', alt: 'إطار نظارة عصري' },
  { id: 'natural-lashes', category: 'eyelashes', filter: 'natural', name: 'رموش ناعمة', detail: 'مظهر طبيعي · خفيفة للاستخدام اليومي', price: 55, badge: 'مظهر طبيعي', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85', alt: 'مستحضرات تجميل لإطلالة طبيعية' },
  { id: 'volume-lashes', category: 'eyelashes', filter: 'volume', name: 'رموش فوليوم', detail: 'كثافة متوازنة · سهلة التركيب', price: 68, badge: 'الأكثر طلبًا', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85', alt: 'مستحضرات تجميل للرموش الكثيفة' },
  { id: 'occasion-lashes', category: 'eyelashes', filter: 'occasion', name: 'رموش سهرة', detail: 'طول وكثافة · لمناسباتكِ الخاصة', price: 75, badge: 'للمناسبات', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85', alt: 'مستحضرات تجميل لإطلالة المناسبات' },
  { id: 'rose-press-on', category: 'nails', filter: 'press-on', name: 'أظافر روز جاهزة', detail: 'وردي حليبي · سهلة التركيب', price: 72, badge: 'وصل حديثًا', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85', alt: 'أظافر بتصميم وردي أنيق' },
  { id: 'classic-polish', category: 'nails', filter: 'polish', name: 'طلاء أظافر كلاسيك', detail: 'لون روزي · لمعة ناعمة', price: 38, badge: '', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=85', alt: 'طلاء أظافر بلون أنيق' },
  { id: 'nail-care-oil', category: 'nails', filter: 'care', name: 'زيت عناية بالأظافر', detail: 'ترطيب يومي · لمسة عناية لطيفة', price: 45, badge: 'عناية يومية', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=85', alt: 'عناية وتجميل للأظافر' }
];

const cart = new Map();
const formatPrice = amount => `${new Intl.NumberFormat('ar-LY').format(amount)} د.ل`;
const productById = id => products.find(product => product.id === id);
const cartPanel = document.querySelector('#cart-panel');
const overlay = document.querySelector('#overlay');
const cartView = document.querySelector('#cart-view');
const checkoutForm = document.querySelector('#checkout-form');
const activeFilters = new Map();
let toastTimeout;

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderProducts() {
  document.querySelectorAll('.product-grid').forEach(grid => {
    const category = grid.dataset.category;
    const selectedFilter = activeFilters.get(category) || 'all';
    const categoryProducts = products.filter(product =>
      product.category === category && (selectedFilter === 'all' || product.filter === selectedFilter)
    );
    grid.innerHTML = categoryProducts.map(product => `
      <article class="product-card">
        <div class="product-image-wrap">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          <button class="favorite-button" type="button" aria-label="أضيفي ${product.name} إلى المفضلة" aria-pressed="false">♡</button>
          <img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy">
          <button class="quick-add" type="button" data-add="${product.id}">أضيفي إلى الحقيبة <span aria-hidden="true">+</span></button>
        </div>
        <div class="product-info"><div><h3>${product.name}</h3><p>${product.detail}</p></div><strong>${formatPrice(product.price)}</strong></div>
      </article>
    `).join('');
  });
}

function renderCart() {
  const items = [...cart.entries()];
  const count = items.reduce((sum, [, quantity]) => sum + quantity, 0);
  const total = items.reduce((sum, [id, quantity]) => sum + productById(id).price * quantity, 0);
  document.querySelector('#cart-count').textContent = new Intl.NumberFormat('ar-LY').format(count);
  document.querySelector('#cart-items').innerHTML = items.map(([id, quantity]) => {
    const product = productById(id);
    return `<article class="cart-item">
      <img src="${product.image}" alt="" loading="lazy">
      <div class="cart-item-info"><h3>${product.name}</h3><p>${formatPrice(product.price)}</p>
        <div class="quantity-control" aria-label="الكمية">
          <button type="button" data-cart-action="increase" data-id="${id}" aria-label="زيادة الكمية">+</button>
          <span>${new Intl.NumberFormat('ar-LY').format(quantity)}</span>
          <button type="button" data-cart-action="decrease" data-id="${id}" aria-label="تقليل الكمية">−</button>
          <button class="remove-item" type="button" data-cart-action="remove" data-id="${id}">إزالة</button>
        </div>
      </div>
    </article>`;
  }).join('');
  document.querySelector('#empty-cart').hidden = count > 0;
  document.querySelector('#cart-summary').hidden = count === 0;
  document.querySelector('#cart-total').textContent = formatPrice(total);
  document.querySelector('#checkout-total').textContent = formatPrice(total);
}

function openPanel() {
  overlay.hidden = false;
  cartPanel.classList.add('is-open');
  cartPanel.setAttribute('aria-hidden', 'false');
  document.body.classList.add('panel-open');
  document.querySelector('#close-panel').focus();
}

function closePanel() {
  overlay.hidden = true;
  cartPanel.classList.remove('is-open');
  cartPanel.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('panel-open');
  cartView.hidden = false;
  checkoutForm.hidden = true;
  document.querySelector('#cart-trigger').focus();
}

function changeQuantity(id, action) {
  const current = cart.get(id) || 0;
  if (action === 'remove' || (action === 'decrease' && current <= 1)) cart.delete(id);
  else if (action === 'increase') cart.set(id, current + 1);
  else cart.set(id, current - 1);
  renderCart();
}

renderProducts();
renderCart();

document.addEventListener('click', event => {
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) {
    const filterGroup = filterButton.closest('[data-filter-group]');
    const category = filterGroup.dataset.filterGroup;
    activeFilters.set(category, filterButton.dataset.filter);
    filterGroup.querySelectorAll('[data-filter]').forEach(button => {
      const selected = button === filterButton;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    renderProducts();
    return;
  }

  const addButton = event.target.closest('[data-add]');
  if (addButton) {
    const id = addButton.dataset.add;
    cart.set(id, (cart.get(id) || 0) + 1);
    renderCart();
    showToast('أُضيف المنتج إلى حقيبتكِ');
    return;
  }

  const favoriteButton = event.target.closest('.favorite-button');
  if (favoriteButton) {
    const selected = favoriteButton.getAttribute('aria-pressed') === 'true';
    favoriteButton.setAttribute('aria-pressed', String(!selected));
    favoriteButton.textContent = selected ? '♡' : '♥';
    showToast(selected ? 'أُزيل المنتج من المفضلة' : 'أُضيف المنتج إلى المفضلة');
    return;
  }

  const cartAction = event.target.closest('[data-cart-action]');
  if (cartAction) {
    changeQuantity(cartAction.dataset.id, cartAction.dataset.cartAction);
    return;
  }

  if (event.target === overlay) closePanel();
});

document.querySelector('#cart-trigger').addEventListener('click', openPanel);
document.querySelector('#close-panel').addEventListener('click', closePanel);
document.querySelector('#continue-shopping').addEventListener('click', closePanel);
document.querySelector('#checkout-trigger').addEventListener('click', () => {
  cartView.hidden = true;
  checkoutForm.hidden = false;
  checkoutForm.querySelector('input').focus();
});
document.querySelector('#back-to-cart').addEventListener('click', () => {
  checkoutForm.hidden = true;
  cartView.hidden = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && cartPanel.classList.contains('is-open')) closePanel();
});

checkoutForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = document.querySelector('#form-message');
  if (!WHATSAPP_NUMBER || !/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    message.textContent = 'لتفعيل إرسال الطلب، أضيفي رقم واتساب المتجر الدولي في WHATSAPP_NUMBER أعلى ملف app.js.';
    return;
  }

  const formData = new FormData(checkoutForm);
  const lines = [...cart.entries()].map(([id, quantity]) => {
    const product = productById(id);
    return `• ${product.name} × ${quantity} — ${formatPrice(product.price * quantity)}`;
  });
  const total = [...cart.entries()].reduce((sum, [id, quantity]) => sum + productById(id).price * quantity, 0);
  const orderMessage = [
    'مرحبًا، أود تأكيد طلبي من QUick store:',
    ...lines,
    `الإجمالي: ${formatPrice(total)}`,
    `الاسم: ${formData.get('name')}`,
    `الجوال: ${formData.get('phone')}`,
    `عنوان التوصيل: ${formData.get('address')}`
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}`, '_blank', 'noopener,noreferrer');
});
