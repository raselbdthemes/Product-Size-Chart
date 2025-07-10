document.addEventListener('DOMContentLoaded', function() {
  // Color selection for all product sections
  document.querySelectorAll('.product-section').forEach(function(section) {
    const colorCircles = section.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
      circle.addEventListener('click', function() {
        colorCircles.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
    if (colorCircles.length) colorCircles[0].classList.add('selected');
  });

  // Quantity selector for all product sections
  [
    { minus: 'qty-minus', plus: 'qty-plus', input: 'qty-input' },
    { minus: 'qty-minus-2', plus: 'qty-plus-2', input: 'qty-input-2' },
    { minus: 'qty-minus-premium', plus: 'qty-plus-premium', input: 'qty-input-premium' }
  ].forEach(function(ids) {
    const minusBtn = document.getElementById(ids.minus);
    const plusBtn = document.getElementById(ids.plus);
    const qtyInput = document.getElementById(ids.input);
    if (minusBtn && plusBtn && qtyInput) {
      minusBtn.addEventListener('click', function() {
        let val = parseInt(qtyInput.value, 10);
        if (val > 1) qtyInput.value = val - 1;
      });
      plusBtn.addEventListener('click', function() {
        let val = parseInt(qtyInput.value, 10);
        qtyInput.value = val + 1;
      });
    }
  });

  // Size Guide Popup (for the first product-section only)
  const sizeGuideLink = document.querySelector('.product-section .size-guide-link');
  const sizeChartWidget = document.querySelector('body > .size-chart-widget');
  const closeBtn = document.querySelector('body > .size-chart-widget .size-chart-close');
  if (closeBtn && sizeChartWidget) {
    closeBtn.onclick = function() {
      sizeChartWidget.classList.remove('active');
      setTimeout(()=>{
        sizeChartWidget.style.display = 'none';
      }, 300);
    };
  }
  if (sizeGuideLink && sizeChartWidget) {
    sizeGuideLink.addEventListener('click', function(e) {
      e.preventDefault();
      sizeChartWidget.style.display = 'flex';
      setTimeout(()=>{
        sizeChartWidget.classList.add('active');
      }, 10);
    });
  }
  // Close on background click (for popup only)
  if (sizeChartWidget) {
    sizeChartWidget.addEventListener('click', function(e) {
      if (e.target === sizeChartWidget) {
        sizeChartWidget.classList.remove('active');
        setTimeout(()=>{
          sizeChartWidget.style.display = 'none';
        }, 300);
      }
    });
  }

  // Premium product size select
  document.querySelectorAll('.premium-product .size-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.premium-product .size-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});
