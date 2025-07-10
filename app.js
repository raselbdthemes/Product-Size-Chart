
    // Color selection
    document.addEventListener('DOMContentLoaded', function() {
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
    });
