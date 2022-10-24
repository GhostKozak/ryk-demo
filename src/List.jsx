import { useEffect, useState } from "react";

const List = () => {
    const [listData, setListData] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/projects')
            .then(res => res.json())
            .then(result => setListData(result))
    }, []);

    return (
        <>
            {listData ? (listData.map(li => (
                <div style={styles.project} key={li.id}>
                    <img src={li.img} style={styles.img} />
                    <h1>{li.title}</h1>
                    <p>{li.description}</p>
                </div>
            ))
            ) : (
                <h1> Loading </h1>
            )}
        </>
    )
}

const styles = {
    "project": {
        "border": "5px solid #fff",
        "padding": "2rem",
        "marginBottom": "3rem"
    },
    "img": {
        "width": "100%",
        "height": "auto",
        "objectFit": "cover"
    }
}

export default List;