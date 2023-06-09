import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

function Post() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [itemname, setItemname] = useState('');
  const [itemdescription, setItemDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    
  //const onSubmit = data => console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/items', {
        item: {
          itemname,
          itemdescription,
          price,
          inventory,
          image,
          categories: selectedCategoryId
        }
      });
      console.log(response.data);
      // フォームをリセット
      setItemname('');
      setItemDescription('');
      setPrice('');
      setInventory('');
      setImage('');
      setSelectedCategoryId('');

    } catch (error) {
      console.error(error.response);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
  };
  
  const style = {
      input: {
        width: '500px',
        height: '40px', /* サイズを変更したい高さに設定 */
      },
      textarea: {
        width: '500px',
        height: '300px',
      },
      button: {
        width: '50px',
        height: '30px'
      }
  };
        
    
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.s}>
         <div className={styles.a}>
          <ul>
           <li>
            <Link href="/">
             <p>トップ</p>
            </Link>
           </li>
           <li>
            <Link href="/post">
             <p>登録</p>
            </Link>
           </li>
           <li>
            <Link href="/check">
             <p>管理</p>
            </Link>
           </li>
           <li>
            <Link href="/confirmation">
             <p>ユーザー</p>
            </Link>
           </li>
          </ul>
        </div>
        <div className='form'>
         <h1>商品登録</h1>
        <Link href="/category">
          <p>カテゴリーページへ</p>
        </Link>
         <div>
         <form onSubmit={handleSubmit}>
          <h3>商品名</h3>
          <input style={style.input} type='text' id='itemname' value={itemname} onChange={(event) => setItemname(event.target.value)} required/>
          <h3>商品説明</h3>
          <textarea style={style.textarea} id="description" value={itemdescription} onChange={(event) => setItemDescription(event.target.value)}></textarea>
          <h3>価格</h3>
          <input type="text" pattern="\d*" style={style.input} id="price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
          <h3>在庫数</h3>
          <input type="text" pattern="\d*" style={style.input} id="inventory" value={inventory} onChange={(event) => setInventory(event.target.value)}></input>
          <h3>Category:</h3>
          <select id="category" value={selectedCategoryId} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.categoryname}</option>
            ))}
          </select>
          <h3>画像</h3>
          <input style={style.input} id="image" value={image} onChange={(event) => setImage(event.target.value)}/>
          <button type="submit">登録</button>
        </form>
         </div>
        </div>
      </div>
    </>
  )
}


export default Post;
