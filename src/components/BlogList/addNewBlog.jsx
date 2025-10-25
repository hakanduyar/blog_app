import { useState } from 'react'
import './addNewBlog.css'

const AddNewBlog = ({addNewBlog}) => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [author, setAuthor] = useState('');
const [date, setDate] = useState('');
const [category, setCategory] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
        id: Date.now(),
        title,
        content,
        author,
        date,
        category
    }

    addNewBlog(newBlog);

    setTitle('');
    setContent('')
    setAuthor('')
    setDate('')
    setCategory('')   
}
    return(
        <div className='add-new-blog'>
            <h2>Yeni Blog Yazısı Ekle</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Başlık" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="İçerik" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <input type="text" placeholder="Yazar" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                <input type="text" placeholder="Kategori" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <button type="submit">Ekle</button>
            </form>
        </div>
    )
}

export default AddNewBlog