import React, { useEffect, useState } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

const AddItem = () => {
    const [caption, setCaption] = useState('');
    const [colors, setColors] = useState('');
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(image);
    }, [image]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('colors', colors);
        formData.append('size', size);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('currency', currency);
        formData.append('stock_quantity', stockQuantity);
        formData.append('image', image);

        setLoading(true);
        try {
            const response = await fetch(`http://192.168.43.227:5442/addItem/hiir443@gmail.com`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMessage(data.message);
                setImageUrl(data.imageUrl); // Assuming the response contains the image URL
            } else {
                setMessage('Error adding item');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error adding item');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center space-y-4'>
            <p className="text-2xl font-semibold mt-[50px]">Add A New Item</p>
            {loading ? <Dots /> : (
                <>
                    {message && <p className="text-red-600">{message}</p>}
                    <input
                        placeholder='Caption'
                        color='gray'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        placeholder='Colors'
                        color='gray'
                        value={colors}
                        onChange={(e) => setColors(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        placeholder='Size'
                        color='gray'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        placeholder='Category'
                        color='gray'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        placeholder='Price'
                        color='gray'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        placeholder='Currency'
                        color='gray'
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        placeholder='Stock Quantity'
                        color='gray'
                        value={stockQuantity}
                        onChange={(e) => setStockQuantity(e.target.value)}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    <input
                        type='file'
                        onChange={(e) => setImage(e.target.files[0])}
                        className='w-[300px] border border-gray-600 rounded-md p-2'
                    />
                    {imageUrl && <img src={imageUrl} alt="Uploaded item" className="mt-4 rounded-md" />}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Item
                    </button>
                </>
            )}
        </div>
    );
};

export default AddItem;
