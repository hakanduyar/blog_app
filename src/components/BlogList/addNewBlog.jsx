import './addNewBlog.css'

const AddNewBlog = () => {
    return(
        <div className='add-new-blog'>
            <h2>Yeni Blog Yazısı Ekle</h2>
            <form>
                <input type="text" placeholder="Başlık" />
                <textarea placeholder="İçerik"></textarea>
                <input type="text" placeholder="Yazar" />
                <input type="date" />
                <input type="text" placeholder="Kategori" />
                <button type="submit">Ekle</button>
            </form>
        </div>
    )
}

export default AddNewBlog