import product from '@/assets/book.jpg'
import Image from 'next/image'

interface ProductPageProps {
    params: {
        product_id: string
    }
}

export default function ProductPage({ params: { product_id } }: ProductPageProps) {
    return (
        <div className='flex'>
            <Image 
                src={product}
                alt='Foto do livro'
                width={300}
                height={600}
            />
            <div>
                
            </div>
        </div>
    )
}