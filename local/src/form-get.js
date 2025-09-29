import React from "react";

export default function FormGet() {
    let [searchResult, setSearchResult] = React.useState('');
    const form = React.useRef();

    const onSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        let params = new URLSearchParams(formData);
        let url = '/api/form-get?'+params;
        fetch(url)
        .then(res => res.json())
        .then(result =>{
            let r =(
                <>
                    ค้นหา {result.target} ที่ตรงกับ "{result.keyword}" <br/>
                    พบข้อมูลทั้งหมด {result.result} รายการ
                </>
            )
            setSearchResult(r)
        })
        .catch(err=>alert(err.message))
    }  
    return (
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <form ref={form} onSubmit={onSubmitForm}>   
                <label>ค้นหา</label>&nbsp;
                <select name="target" id="target">
                    <option value="web">เว็บ</option>
                    <option value="image">รูปภาพ</option>
                    <option value="video">วีดีโอ</option>
                </select>&nbsp;
                <input type="text" name="keyword" id="keyword" />&nbsp;
                <button>ตกลง</button>
            </form>
            <br/>
            <div>{searchResult}</div>
        </div>
    )
}
    