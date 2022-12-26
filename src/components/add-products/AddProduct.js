const AddProduct = ({
    products,
    selected,
    totalProducts,
    handleChange,
    handleClick,
    onCloseModal,
}) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <input
                        type="checkbox"
                        value={product.id}
                        onChange={handleChange}
                        checked={product.id in selected}
                    />
                    <img src={product.image.src} />
                    <h3>{product.title}</h3>
                    {product.variants.map((variant) => (
                        <div key={variant.id}>
                            <input
                                type="checkbox"
                                name={variant.id}
                                value={product.id}
                                onChange={handleChange}
                                checked={!selected[product.id] ? false : selected[product.id].includes(variant.id)}
                            />
                            <div>{variant.title}</div>
                            {variant.inventory_quantity && <div>{variant.inventory_quantity} available </div>}
                            <div>₹{variant.price}</div>
                        </div>
                    ))}
                </div>
            ))}
            <div>{totalProducts} products selected</div>
            <button onClick={onCloseModal}>Cancel</button>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddProduct;
