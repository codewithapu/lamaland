import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/Card.module.scss'
import Link from 'next/link'
import AddToCartButton from './Button/AddToCartBtn'
import data from '../data/product.json'

const Card: React.FC = () => {
  return (
    <div className={styles.CardContainer}>

      {data.products.map(product => (

        <div className={styles.Card} key={product.Id}>

          <div className={styles.Banner}>
            <div className={styles.VegType}>
              <svg className={styles.VegLogo} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H19C24.5228 0 29 4.47715 29 10V19C29 24.5228 24.5228 29 19 29H10C4.47715 29 0 24.5228 0 19V10Z" fill="white" />
                <path className={styles.VegLogoIndentifier} d="M23.0244 14.4949C23.0244 19.2055 19.2057 23.0243 14.495 23.0243C9.78432 23.0243 5.96558 19.2055 5.96558 14.4949C5.96558 9.78421 9.78432 5.96547 14.495 5.96547C19.2057 5.96547 23.0244 9.78421 23.0244 14.4949Z"
                  fill={product.Type === 'Veg' ? '#00FF47' : '#FF0000'} />
              </svg>
            </div>
            <div className={styles.PriceTag}>
              <p className={styles.DiscountBadge}>{product.Discount}% Off</p>
              <div className={styles.Price}>
                <h2 className={styles.DiscountedPrice}>₹{Math.round(product.Price * (100 - product.Discount) / 100)}</h2>
                <h6 className={styles.MainPrice}>₹{Math.round(product.Price)}</h6>
              </div>
            </div>
            <img src={product.BannerImageLink} alt={product.Name} className={styles.FoodImage} />
          </div>
          <div className={styles.Tag}>
            <div className={styles.FoodLabel}>
              <p className={styles.SubCategory}>{product.Category}</p>
              <h1 className={styles.FoodTitle}>{product.Name}</h1>
            </div>
            <div className={styles.Button}>
              {/* <AddToCartButton /> */}
            </div>
          </div>

        </div>

      ))}

    </div>
  )
}

export default Card;