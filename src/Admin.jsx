import { useEffect, useState } from "react";

const Admin = () => {
    const [_title, _setTitle] = useState("");
    const [_description, _setDescription] = useState("");
    const [_img, _setImg] = useState("");
    const [_imgData, _setImgData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/projects', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                title: _title,
                description: _description,
                img: _imgData
            })
        })
    }

    useEffect(() => {
        if (_img) {
            let fs = new FileReader();
            fs.onload = () => {
                _setImgData(fs.result);
            }
            fs.readAsDataURL(_img)
        }
    }, [_img])

    return (
        <>
            <h1> Admin sayfası </h1>
            <form style={styles.form} onSubmit={handleSubmit} >
                <input type="text" value={_title} onChange={e => _setTitle(e.target.value)} placeholder="Title" />
                <small>{_title}</small>
                <textarea value={_description} onChange={e => _setDescription(e.target.value)} cols="30" rows="10" placeholder="Description"></textarea>
                <small>{_description}</small>
                <input type="file" onChange={e => _setImg(e.target.files[0])} />
                <small>{_img.name}</small>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

const styles = {
    "form": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "0.8rem"
    }
}

export default Admin;