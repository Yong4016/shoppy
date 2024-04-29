import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

const NewProducts = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url).then(() => {
          setSuccess('Added item successfully.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
          setProduct({});
          setFile(undefined);
        });
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  return (
    <section className='w-full text-center '>
      <h2 className='text-2xl font-bold my-4'>Add New Product</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form
        className='flex flex-col px-12'
        onSubmit={handleSubmit}
      >
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='product title...'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='price...'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='product category...'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='product description...'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='product options...'
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? 'Uploading...' : 'Add Product'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
};

export default NewProducts;
