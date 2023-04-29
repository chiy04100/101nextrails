import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

function ItemEdit() {
  const router = useRouter()
  const { id } = router.query
  const [itemname, setItemname] = useState('');
  const [itemdescription, setItemDescription] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`http://localhost:3000/items/${id}`)
      const data = await res.json()
      setItemname(data.itemname)
      setItemDescription(data.itemdescription)
      setPrice(data.price)
      setInventory(data.inventory)
      setImage(data.image)
    }
    if (id) {
      fetchItem()
    }
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch(`http://localhost:3000/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        itemname,
        itemdescription,
        price,
        inventory,
        image,  
    })
      
    })
    if (res.ok) {
      router.push('/')
    } else {
      console.error('Failed to update item')
    }
  }

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
         <h1>商品編集</h1>
         <div>
         <form onSubmit={handleSubmit}>
            <h3>商品名</h3>
            <input style={style.input} type='text' id='itemname' value={itemname} onChange={(event) => setItemname(event.target.value)} required/>
            <h3>商品説明</h3>
            <textarea style={style.textarea} id="description" value={itemdescription} onChange={(event) => setItemDescription(event.target.value)}></textarea>
            <h3>価格</h3>
            <input type="text" pattern="\d*" style={style.input} id="description" value={price} onChange={(event) => setPrice(event.target.value)}></input>
            <h3>在庫数</h3>
            <input type="text" pattern="\d*" style={style.input} id="description" value={inventory} onChange={(event) => setInventory(event.target.value)}></input>
            <h3>画像</h3>
            <input style={style.input} id="description" value={image} onChange={(event) => setImage(event.target.value)}/>
            <button type="submit">更新</button>
          </form>
         </div>
        </div>
      </div>
  )
}
  

export default ItemEdit
