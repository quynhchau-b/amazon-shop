import Link from 'next/link'
import styles from './shopSection.module.css'

const dataSections = [
    {
        img: '/images/categories/1736342037.jpg',
        title: 'NFT',
        link: '/'
    },
    {
        img: '/images/categories/1729788844.jpg',
        title: 'Video Games',
        link: '/'
    },
    {
        img: '/images/categories/1729789025.jpg',
        title: 'Toys and Games',
        link: '/'
    },
    {
        img: '/images/categories/1729788960.jpg',
        title: 'Tools & Home Improvement',
        link: '/'
    },
    {
        img: '/images/categories/1729788907.jpg',
        title: 'Sports and Outdoors',
        link: '/'
    },
    {
        img: '/images/categories/1729788844.jpg',
        title: 'Software',
        link: '/'
    },
    {
        img: '/images/categories/1729788772.jpg',
        title: 'Pet supplies',
        link: '/'
    }, {
        img: '/images/categories/1729788699.jpg',
        title: 'Movies & Television',
        link: '/'
    }, {
        img: '/images/categories/1729788638.jpg',
        title: 'Luggage',
        link: '/'
    }, {
        img: '/images/categories/1729788553.jpg',
        title: 'Industrial and Scientific',
        link: '/'
    }, {
        img: '/images/categories/1729788449.jpg',
        title: 'Home and Kitchen',
        link: '/'
    }, {
        img: '/images/categories/1729627517.jpg',
        title: 'Health and Household',
        link: '/'
    }, {
        img: '/images/categories/1729627487.jpg',
        title: 'Boys Fashion',
        link: '/'
    }, {
        img: '/images/categories/1729627444.jpg',
        title: 'Girls Fashion',
        link: '/'
    }, {
        img: '/images/categories/1729627397.jpg',
        title: 'Mens Fashion',
        link: '/'
    }, {
        img: '/images/categories/1729627377.jpg',
        title: 'Womens Fashion',
        link: '/'
    }, {
        img: '/images/categories/1729627351.jpg',
        title: 'Beauty and Personal Care',
        link: '/'
    }, {
        img: '/images/categories/1729627313.jpg',
        title: 'Baby',
        link: '/'
    }, {
        img: '/images/categories/1729627289.jpg',
        title: 'Automotive',
        link: '/'
    }, {
        img: '/images/categories/1729627264.jpg',
        title: 'Arts & Crafts',
        link: '/'
    }, {
        img: '/images/categories/1729627243.jpg',
        title: 'Smart Home',
        link: '/'
    }, {
        img: '/images/categories/1729627193.jpg',
        title: 'Computers',
        link: '/'
    }, {
        img: '/images/categories/1730525706.jpg',
        title: 'Electronics',
        link: '/'
    },
]

export default function ShopSection() {
    return(
        <div className={styles.container}>
            {dataSections.map((item, index)=> {
                return(
                    <Link href={"/listproductcate"} className={styles.box} key={index}>
                    <div className="mx-[1rem]">
                        <div className={styles.titleBox}>
                            {item.title}
                        </div>
                        <div className='h-[250px] overflow-hidden' style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: 'cover'
                        }}>

                        </div>
                    </div>
                </Link>
                )
            })
            
            }
              
        </div>
    )
}