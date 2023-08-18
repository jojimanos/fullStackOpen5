const BlogForm = ({ handleCreate, author, setAuthor, title, setTitle, url, setUrl }) => {


    return (
        <>
            <form onSubmit={handleCreate}>
                <div>
                    author <input
                        className="author"
                        type="text"
                        value={author}
                        name="Author"
                        onChange={
                            (event) => { setAuthor(event.target.value) }
                        }
                    />
                </div>
                <br />
                <div>
                    title <input
                        type="text"
                        value={title}
                        name="Title"
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </div>
                <br />
                <div>
                    url <input
                        type="text"
                        value={url}
                        name="Url"
                        onChange={(event) => { setUrl(event.target.value) }}
                    />
                </div>
                <br />
                <button type="submit">Create</button>
            </form>
        </>
    )
}

export default BlogForm