document.addEventListener('DOMContentLoaded', function() {
      // Color selection
      const colorCircles = document.querySelectorAll('.color-circle');
      colorCircles.forEach(circle => {
        circle.addEventListener('click', function() {
          colorCircles.forEach(c => c.classList.remove('selected'));
          this.classList.add('selected');
        });
      });
      if (colorCircles.length) colorCircles[0].classList.add('selected');

      // Quantity selector
      const minusBtn = document.getElementById('qty-minus');
      const plusBtn = document.getElementById('qty-plus');
      const qtyInput = document.getElementById('qty-input');
      minusBtn.addEventListener('click', function() {
        let val = parseInt(qtyInput.value, 10);
        if (val > 1) qtyInput.value = val - 1;
      });
      plusBtn.addEventListener('click', function() {
        let val = parseInt(qtyInput.value, 10);
        qtyInput.value = val + 1;
      });

      // Size Guide Popup
      const sizeGuideLink = document.querySelector('.size-guide-link');
      const sizeChartWidget = document.querySelector('.size-chart-widget');
      const closeBtn = document.querySelector('.size-chart-close');
      if (closeBtn) {
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
      // Close on background click
      sizeChartWidget.addEventListener('click', function(e) {
        if (e.target === sizeChartWidget) {
          sizeChartWidget.classList.remove('active');
          setTimeout(()=>{
            sizeChartWidget.style.display = 'none';
          }, 300);
        }
      });
    });
