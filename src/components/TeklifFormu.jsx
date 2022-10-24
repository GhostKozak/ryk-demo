const TeklifFormu = () => {
    return (
        <>
            <div className="form">
                <div className="row">
                    <div className="ad-soyad">
                        <span>
                            <input className="balloon" type="text" placeholder="Yılmaz, İlkkan, Ersoy" /><label htmlFor="İsim">İsim</label>
                        </span>
                        <span>
                            <input className="balloon" type="text" placeholder="Eser, Kadirli" /><label htmlFor="Soyisim">Soyisim</label>
                        </span>
                    </div>

                    <div className="iletisim">
                        <span>
                            <input className="balloon" type="text" placeholder="example@example.com" /><label htmlFor="E-posta">E-posta</label>
                        </span>
                        <span>
                            <input className="balloon" type="text" placeholder="+90 555 444 33 22" /><label htmlFor="Gsm No">Gsm No</label>
                        </span>
                    </div >

                    <div className="mesaj">
                        <span >
                            <textarea className="balloon" type="text-area" placeholder="Mesajınız" /><label htmlFor="Mesajınız">Mesajınız</label>
                        </span>
                    </div >
                </div >

            </div >

        </>
    )
}

export default TeklifFormu;