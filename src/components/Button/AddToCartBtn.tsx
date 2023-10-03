import React, { useState } from 'react';
import styles from '@/styles/components/Button/AddToCartBtn.module.scss'

const AddToCartButton: React.FC = () => {
  const MAX_QUANTITY = 15;
  const [quantity, setQuantity] = useState<number | null>(null);

  const handleAddToCartClick = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    if (quantity !== null && quantity < MAX_QUANTITY) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(null);
    }
  };

  if (quantity !== null) {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.quantityBtn} onClick={handleDecrease}>-</button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.quantityBtn} onClick={handleIncrease}>+</button>
      </div>
    );
  }

  return (
    <button className={styles.addToCartBtn} onClick={handleAddToCartClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
