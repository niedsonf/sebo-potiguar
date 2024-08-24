import Image from 'next/image'

interface ProductPageProps {
    params: {
        product_id: string
    }
}

export default function ProductPage({ params: { product_id } }: ProductPageProps) {
    return (
        <div className='flex'>
            
            <div>
                
            </div>
        </div>
    )
}