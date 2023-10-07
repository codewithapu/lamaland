import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Cart.module.scss'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'

export default function Cart() {
    return (
        <>
            <Head>
                <title>Lama Land | Cart</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />


            <div className={styles.Wraper}>
                <h1 className={styles.MainLabel}>Cart</h1>
                <div className={styles.Container}>

                    <div className={styles.CartItems}>
                        <div className={styles.Left}>
                            <p className={styles.Count}>1</p>
                            <img className={styles.DishImage} src="https://ik.imagekit.io/wrapngo/dishes/Mutton%20Galouti%20Kebab.png?updatedAt=1696269082512" />
                        </div>
                        <div className={styles.MoreDetails}>
                            <div className={styles.Details}>
                                <p className={styles.Category}>VEG MOMOS</p>
                                <h2 className={styles.DishName}>Steamed Veg Momos</h2>
                            </div>

                            <h2 className={styles.Price}>
                                ₹ 49
                            </h2>
                        </div>
                    </div>


                    <div className={styles.CartItems}>
                        <div className={styles.Left}>
                            <p className={styles.Count}>2</p>
                            <img className={styles.DishImage} src="https://ik.imagekit.io/wrapngo/dishes/Mushroom%20Galouti%20Kebab.png?updatedAt=1696269079091" />
                        </div>
                        <div className={styles.MoreDetails}>
                            <div className={styles.Details}>
                                <p className={styles.Category}>VEG MOMOS</p>
                                <h2 className={styles.DishName}>Steamed Veg Momos</h2>
                            </div>

                            <h2 className={styles.Price}>
                                ₹ 49
                            </h2>
                        </div>
                    </div>

                    <div className={styles.CartItems}>
                        <div className={styles.Left}>
                            <p className={styles.Count}>3</p>
                            <img className={styles.DishImage} src="https://ik.imagekit.io/wrapngo/dishes/Lacha%20Paratha.png?updatedAt=1696269079065" />
                        </div>
                        <div className={styles.MoreDetails}>
                            <div className={styles.Details}>
                                <p className={styles.Category}>VEG MOMOS</p>
                                <h2 className={styles.DishName}>Fried Veg Momos</h2>
                            </div>

                            <h2 className={styles.Price}>
                                ₹ 49
                            </h2>
                        </div>
                    </div>

                    <div className={styles.CartItems}>
                        <div className={styles.Left}>
                            <p className={styles.Count}>4</p>
                            <img className={styles.DishImage} src="https://ik.imagekit.io/wrapngo/dishes/Lacha%20Paratha.png?updatedAt=1696269079065" />
                        </div>
                        <div className={styles.MoreDetails}>
                            <div className={styles.Details}>
                                <p className={styles.Category}>VEG MOMOS</p>
                                <h2 className={styles.DishName}>Steamed Veg Momos</h2>
                            </div>

                            <h2 className={styles.Price}>
                                ₹ 49
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
