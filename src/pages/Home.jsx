import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/ProductCard'
import { getAllProducts } from '../api/getAllProducts'
import { useEffect, useState } from 'react'
import { useCart } from '../context/cart-context'
import { getAllCategories } from '../api/getAllCategories'
import { getProductsByCategory } from '../utils/getProductsByCategory'


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { cart } = useCart();
    console.log(cart);

    useEffect(() => {
        (async () => {
            const products = await getAllProducts();
            const categories = await getAllCategories();
            const updatedCategories = [...categories, { id: '1a', name: 'All' }];
            setProducts(products);
            setCategories(updatedCategories);
            console.log(categories);
            console.log(products);
        })()
    }, [])

    const onCategoryClick = (category) => {
        setSelectedCategory(category);

    }
    const filteredByCategories = getProductsByCategory(products, selectedCategory);
    return (
        <>
            <Navbar />
            <main className='pt-20 h-full'>
                <div className="w-full overflow-x-auto scrollbar-hide ">
                    {/* <div className="w-full overflow-x-auto"> */}
                    <div className="flex gap-4 px-4 py-3 w-max  m-auto text-sm sm:text-md md:text-lg lg:text-xl">
                        {
                            categories?.length > 0 && categories.map(category => <div className='bg-green-300 font-normal text-center rounded-full py-2  px-4  hover:cursor-pointer  hover:bg-green-400 transition mx-1' onClick={() => onCategoryClick(category.name)}>
                                {category.name}</div>)
                        }
                    </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] w-full mt-6 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center items-start px-4'>
                        {
                            filteredByCategories?.length > 0 ? filteredByCategories.map(product => <ProductCard key={product.id} product={product} />)
                                : <div className='flex items-centerjustify-center text-center'>
                                 <h2 className=' text-slate-50 text-sm sm:text-md md:text-lg lg:text-xl'>No Products found,please try with another category</h2>
                                 </div>
                        }
                    </div>
                {/* </div> */}
            </main>
     
        </>
    )
}