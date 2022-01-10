import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

function useProductDetail(productId) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await productApi.get(productId);
                    setProduct(response)
                    setLoading(false)
                }
                catch (error) {
                    console.log('loi roi', error);
                }
            }
        )()
    }, [productId])
    return { product, loading }
}

export default useProductDetail