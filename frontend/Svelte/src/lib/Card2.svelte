<script>
	export let product = {};
  </script>
  
  <style>
	.product-card {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  width: 300px;
	  height: 400px;
	  border: 1px solid gray;
	  border-radius: 10px;
	  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
	  overflow: hidden;
	}
  
	.product-image {
	  width: 100%;
	  height: 60%;
	}
  
	.product-info {
	  padding: 20px;
	  text-align: center;
	}
  
	.product-name {
	  font-size: 22px;
	  font-weight: bold;
	  margin-bottom: 10px;
	}
  
	.product-price {
	  font-size: 18px;
	  color: gray;
	}
  </style>
  
  <div class="product-card">
	<img class="product-image" src="{product.image}" alt="{product.name}" />
	<div class="product-info">
	  <div class="product-name">{product.name}</div>
	  <div class="product-price">${product.price}</div>
	</div>
  </div>