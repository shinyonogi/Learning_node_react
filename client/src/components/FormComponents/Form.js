import React, { useState } from 'react'
import "./Form.css"

function Form() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    console.log(name)
    console.log(password)
    console.log(email)
    console.log(msg)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }

    return (
        <div className="registration-form">
            <form id="form" action="" method="GET" onSubmit={handleSubmit}>
                <div className="form-icon">
                    <span><i className="icon icon-ghost"></i></span>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control item" id="name" name="name" placeholder="名前" required 
                    onChange={e=>setName(e.target.value)}/>
                </div>

                <div id="error"></div>

                <div className="form-group">
                    <input type="text" className="form-control item" id="password" name="password" placeholder="パスワード" required
                    onChange={e=>setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control item" id="email" name="email" placeholder="メールアドレス" required
                    onChange={e=>setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <textarea className="form-control item" id="msg" name="msg" rows="3" placeholder="なにか一言!" required
                    onChange={e=>setMsg(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account">アカウントを作成</button>
                </div>

            </form>
        </div>
    )
}

export default Form